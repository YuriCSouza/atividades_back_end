import { PacienteService } from './paciente.service';
import { Paciente } from './paciente.interface';
export declare class PacienteController {
    private readonly pacienteService;
    constructor(pacienteService: PacienteService);
    create(paciente: Omit<Paciente, 'id'>): Paciente;
    findAll(): Paciente[];
    findByCpf(cpf: string): Paciente | undefined;
}
