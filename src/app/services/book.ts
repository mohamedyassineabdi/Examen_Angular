import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://openlibrary.org';  // URL de base de l'API OpenLibrary

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les livres sur le sujet "computers"
  getBooks(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/subjects/computers.json`);
  }

  // Alias compatible avec l'énoncé (getBooksList)
  getBooksList(): Observable<any> {
    return this.getBooks();
  }

  // Méthode pour rechercher un livre par titre
  searchByTitle(title: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search.json?title=${title}`);
  }

  // Méthode pour rechercher par année de première publication
  searchByYear(year: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search.json?first_publish_year=${year}`);
  }

  // Méthode pour récupérer un livre spécifique par son ID
  getBookById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/works/${id}.json`);
  }

  // Récupérer un auteur par son ID (ex: OL2623461A)
  getAuthorByKey(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/authors/${id}.json`);
  }
}
