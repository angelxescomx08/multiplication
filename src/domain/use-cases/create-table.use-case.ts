export type CreateTableUseCase = {
  execute: (options: CreateTableOptions) => string;
};

export type CreateTableOptions = {
  base: number;
  limit?: number;
};

export class CreateTable implements CreateTableUseCase {
  constructor() {}
  execute({ base, limit = 10 }: CreateTableOptions) {
    let table = "";
    for (let i = 1; i <= limit; i++) {
      table += `${base} x ${i} = ${base * i}\n`;
    }
    return table;
  }
}
