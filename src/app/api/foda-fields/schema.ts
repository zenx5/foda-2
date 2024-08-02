import { z } from 'zod';

// define a schema for the foda
export const fodaSchema = z.object({
    strengths: z.array(z.string()).describe('Fortaleza para esquema FODA'),
    weaknesses: z.array(z.string()).describe('Debilidades para esquema FODA'),
    threats: z.array(z.string()).describe('Amenazas para esquema FODA'),
    opportunities: z.array(z.string()).describe('Oportunidades para esquema FODA'),
});