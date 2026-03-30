import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { Paciente } from './paciente.interface';

@Controller('pacientes')
export class PacienteController {
    constructor(private readonly pacienteService: PacienteService) {}

    @Post()
    create(@Body() paciente: Omit<Paciente, 'id'>) {
        return this.pacienteService.create(paciente);
    }

    @Get()
    findAll() {
        return this.pacienteService.findAll();
    }

    @Get(':cpf')
    findByCpf(@Param('cpf') cpf: string) {
        return this.pacienteService.findByCpf(Number(cpf));
    }
}
