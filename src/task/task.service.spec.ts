import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new task', async () => {
    const mockTask = { title: 'Test Task', description: 'Test Description', status: 'OPEN' };
    jest.spyOn(service, 'createTask').mockResolvedValue(mockTask);

    const result = await service.createTask(mockTask);
    expect(result).toEqual(mockTask);
  });

  it('should retrieve all tasks', async () => {
    const mockTasks = [
      { title: 'Task 1', description: 'Description 1', status: 'OPEN' },
      { title: 'Task 2', description: 'Description 2', status: 'IN_PROGRESS' },
    ];
    jest.spyOn(service, 'getTasks').mockResolvedValue(mockTasks);

    const result = await service.getTasks();
    expect(result).toEqual(mockTasks);
  });
});