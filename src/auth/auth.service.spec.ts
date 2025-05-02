import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should validate user credentials', async () => {
    const mockCredentials = { email: 'test@example.com', password: 'password123' };
    jest.spyOn(service, 'validateUser').mockResolvedValue(true);

    const result = await service.validateUser(mockCredentials.email, mockCredentials.password);
    expect(result).toBe(true);
  });

  it('should throw an error for invalid credentials', async () => {
    const mockCredentials = { email: 'wrong@example.com', password: 'wrongpassword' };
    jest.spyOn(service, 'validateUser').mockResolvedValue(false);

    await expect(service.validateUser(mockCredentials.email, mockCredentials.password)).rejects.toThrow();
  });
});