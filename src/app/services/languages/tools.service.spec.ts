import { TestBed } from '@angular/core/testing';
import { ToolsService } from './tools.service';

describe('ToolsService', () => {
  let service: ToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an object of tools', () => {
    const tools = service.getTools();
    expect(tools).toBeDefined();
    expect(typeof tools).toEqual('object');
    expect(Object.keys(tools).length).toBeGreaterThan(0);
  });

  it('should return tools with correct structure', () => {
    const tools = service.getTools();
    const developmentTools = tools.development;

    expect(developmentTools).toBeDefined();
    expect(Array.isArray(developmentTools)).toBeTrue();
    expect(developmentTools.length).toBeGreaterThan(0);
  });

  it('should return tools with correct data type', () => {
    const tools = service.getTools();
    const developmentTools = tools.development;

    for (let tool of developmentTools) {
      expect(typeof tool).toEqual('string');
    }
  });
});
