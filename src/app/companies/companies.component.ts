import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../services/company.service'; // Importer CompanyService

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompanyComponent implements OnInit {
  // Variabler til at gemme virksomhedens data og liste over virksomheder
  company: any = this.getEmptyCompany();
  companies: any[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadCompanies(); // Indlæs eksisterende virksomheder
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe((data: any[]) => {
      this.companies = data; // Gem data fra API'et i companies arrayet
    });
  }

  createCompany(): void {
    if (this.company.name !== '' && this.company.homepage) {
      this.companyService.createCompany(this.company).subscribe((newCompany: any) => {
        this.companies.push(newCompany); // Tilføj den nye virksomhed til listen
        this.resetCompany(); // Nulstil formularen korrekt
      });
    }
  }

  deleteCompany(id: number): void {
    this.companyService.deleteCompany(id).subscribe(() => {
      this.companies = this.companies.filter(c => c.id !== id); // Fjern den slettede virksomhed fra listen
    });
  }

  // Tilføj metode til at redigere en virksomhed
  editCompany(company: any): void {
    this.company = { ...company };  // Kopier virksomhedens data inkl. id
  }

  updateCompany(): void {
    if (this.company.id && this.company.name && this.company.homepage) {  // Sørg for at id er defineret
      this.companyService.updateCompany(this.company.id, this.company).subscribe((updatedCompany: any) => {
        const index = this.companies.findIndex(c => c.id === updatedCompany.id);
        if (index !== -1) {
          this.companies[index] = updatedCompany;
        }
        this.resetCompany(); // Nulstil formularen korrekt
      });
    }
  }

  // Metode til at nulstille company-objektet korrekt
  private resetCompany(): void {
    this.company = this.getEmptyCompany();
  }

  // Returnerer et tomt company-objekt uden id
  private getEmptyCompany(): any {
    return { id: undefined, name: '', educationalBranch: '', homepage: '', notes: '', companySize: null };
  }
}
