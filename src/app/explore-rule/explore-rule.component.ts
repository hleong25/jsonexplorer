import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-rule',
  templateUrl: './explore-rule.component.html',
  styleUrls: ['./explore-rule.component.scss']
})
export class ExploreRuleComponent implements OnInit {

  private rules: string = `{
  "rooturl": "http://localhost:80/api/v1",
  "exec": "/adm/hosts",
  "rules": [
    {
      "match": "test",
      "exec": '/adm/databases?filter=appServerId eq "returned.id"'
    }
  ]
}
`;

  constructor() { }

  ngOnInit() {
  }

}
