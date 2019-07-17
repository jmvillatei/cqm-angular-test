import {Component} from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'hello-world',
    templateUrl: './1er.component.html',
    styleUrls: ['./1er.component.css']
})
export class HelloWorld {
    title = 'Welcome to ANGULAR';
}