/**
 * Converte um texto em slug.
 *
 * Ex:
 * "Olá Mundo!" => "ola-mundo"
 * "Curso de TypeScript 2026" => "curso-de-typescript-2026"
 */
export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove caracteres especiais
    .replace(/\s+/g, "-") // espaços -> hífen
    .replace(/-+/g, "-"); // múltiplos hífens -> único
}