import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private apiUrl = 'https://localhost:7031/api/company'; // API URL til Companies

  constructor(private http: HttpClient) {}

  // Hent alle virksomheder
  getCompanies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Opret en ny virksomhed
  createCompany(company: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, company);
  }

  // Slet en virksomhed
  deleteCompany(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
    // Opdater en eksisterende virksomhed
    updateCompany(id: number, company: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/${id}`, company);
    }
  
}
