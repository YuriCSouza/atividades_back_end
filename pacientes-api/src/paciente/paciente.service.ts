import { Injectable } from '@nestjs/common';
import { Paciente } from './paciente.interface';

@Injectable()
export class PacienteService {
    private pacientes: Paciente[] = [];
    private idCounter: number = 1;

  create(paciente: Omit<Paciente, 'id'>): Paciente {
        const novoPaciente: Paciente = {
            id: this.idCounter++,
            ...paciente,
        };
        this.pacientes.push(novoPaciente);
        return novoPaciente;
  }

  findAll(): Paciente[] {
        return this.pacientes;
  }

  findByCpf(cpf: number): Paciente | undefined {
    return this.pacientes.find(paciente => paciente.cpf === cpf);
  }
}