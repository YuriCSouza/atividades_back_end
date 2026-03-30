import { Paciente } from './paciente.interface';
export declare class PacienteService {
    private pacientes;
    private idCounter;
    create(paciente: Omit<Paciente, 'id'>): Paciente;
    findAll(): Paciente[];
    findByCpf(cpf: number): Paciente | undefined;
}
