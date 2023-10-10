import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FOTS';

  users:any

  readExcelFile(e:any){
    
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = ()=> {
      let data = reader.result;
      let workbook = XLSX.read(data,{type:'array'});
      const sheetName = workbook.SheetNames[0];
      const leaderboardData = workbook.Sheets[sheetName];
      this.users = XLSX.utils.sheet_to_json(leaderboardData,{raw:true})
    }
     
  }
}
