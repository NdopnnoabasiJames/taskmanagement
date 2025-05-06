export function extractTokenFromHeader(headers: { authorization?: string }): string | undefined {
  const [type, token] = headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
}