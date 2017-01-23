import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss']
})
export class JsonViewerComponent implements OnInit {

  private title: string = "hello world";
  private data: Object;

  constructor() { }

  ngOnInit() {
    this.data = JSON.parse(`
{
  "id": 123,
  "name": "henry",
  "work": [
    {
      "company": "dell"
    },
    {
      "company": "emc"
    },
    {
      "company": "thales"
    },
    {
      "company": "rockwell collins"
    }
  ]
}
  `);
  }

  public parseData(data: string) {
    let json = JSON.parse(data);

    this.data = json;

  }

}
