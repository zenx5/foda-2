import { NextRequest, NextResponse } from "next/server"

interface fileRepo {
    name: string,
    path: string,
    sha: string,
    size: number,
    url: string,
    html_url: string,
    git_url: string,
    download_url: string,
    type: string,
    _links: {
        self: string,
        git: string,
        html: string
    }
}

export async function GET(request:NextRequest, { params}:{params:{repo:string}}) {
    const { repo } = params
    const files = await recursiveFetch(repo)
    return NextResponse.json({ files: files.reduce( (acc, item) => acc.findIndex( ({path}:{path:string})=>path===item.path)===-1?[...acc,item]:acc ,[]) })
}

async function recursiveFetch(repo:string, path:string = "", results:fileRepo[] = []) {
    const response = await fetch(`https://api.github.com/repos/zenx5/${repo}/contents/${path}`)
    const data = await response.json()
    const files = data.filter( (item:fileRepo) => item?.type==='file' ).map((item:fileRepo) => ({ name:item.name, path:item.path }) )
    const folders = data.filter( (item:fileRepo) => item?.type==='dir' ).map((item:fileRepo) => item.path)

    if( folders.length === 0 ) return [...files, ...results]
    for( const folder of folders ) {
        const filesInFolders = await recursiveFetch(repo, folder) as fileRepo[]
        results.push(...filesInFolders)
    }
    return [...files, ...results]
}
