import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'  
})

export class EmployeeService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}
    
    public getEmployees(): Observable<Employee[]>{
        return this.http.get<Employee[]>(`${this.apiServerUrl}/user/all`);
    }
    
    public addEmployee(employee: Employee): Observable<Employee>{
        return this.http.post<Employee>(`${this.apiServerUrl}/user/add`,employee);
    }

    public updateEmployee(employee: Employee): Observable<Employee>{
        return this.http.put<Employee>(`${this.apiServerUrl}/user/update`,employee);
    }

    public deletEmployee(employeeId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${employeeId}`);
    }
}

