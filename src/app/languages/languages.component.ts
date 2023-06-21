/* File: src/app/languages/languages.component.spec.ts */
import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../services/languages/languages.service';
import { FrameworksService } from '../services/languages/frameworks.service';
import { ToolsService } from '../services/languages/tools.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  languages: {
    language: string,
    period: string,
    level: string
  }[] = [];

  frameworks: {
    name: string,
    level: string
  }[] = [];

  tools: string[] = [];

  searchTerm: any;

  constructor(
    private languagesService: LanguagesService,
    private frameworksService: FrameworksService,
    private toolsService: ToolsService
  ) { }

  ngOnInit(): void {
    this.languages = this.languagesService.getLanguages();
    this.frameworks = this.frameworksService.getFrameworks();
    this.tools = [
      ...this.toolsService.getTools().development,
      ...this.toolsService.getTools().backend,
      ...this.toolsService.getTools().agile,
      ...this.toolsService.getTools().design
    ];
  }

  applySearch(term: string): void {
    this.languages = this.languagesService.getLanguages().filter(language =>
      language.language.toLowerCase().includes(term.toLowerCase())
    );

    this.frameworks = this.frameworksService.getFrameworks().filter(framework =>
      framework.name.toLowerCase().includes(term.toLowerCase())
    );

    this.tools = [
      ...this.toolsService.getTools().development,
      ...this.toolsService.getTools().backend,
      ...this.toolsService.getTools().agile,
      ...this.toolsService.getTools().design
    ].filter(tool =>
      tool.toLowerCase().includes(term.toLowerCase())
    );
  }

  proficiencyLevel(level: string) {
    switch (level) {
      case 'Iniciante':
        return 33;
      case 'Intermediário':
        return 66;
      case 'Avançado':
        return 100;
      default:
        return 0;
    }
  }

  toggleTools(): void {
    const toolsSection = document.querySelector('.tools-section') as HTMLElement;

    if (toolsSection?.style.maxHeight) {
      toolsSection.style.maxHeight = ''
    } else {
      toolsSection.style.maxHeight = toolsSection?.scrollHeight + 'px';
    }
  }
}