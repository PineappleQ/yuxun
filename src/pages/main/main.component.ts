import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'main',
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
    @ViewChild("searchInput") searchInput: ElementRef;
    inputFocus: boolean = false; //焦点是否在input框
    inputText: string = ""; //输入的文本model
    chatList = [
        {
            id: "a",
            pic: "./assets/images/head-icon-a.jpg",
            name: "用户A"
        },
        {
            id: "b",
            pic: "./assets/images/head-icon-b.jpg",
            name: "用户b"
        },
        {
            id: "c",
            pic: "./assets/images/head-icon-c.jpg",
            name: "用户c"
        },
        {
            id: "d",
            pic: "./assets/images/head-icon-d.jpg",
            name: "用户d"
        },
        {
            id: "e",
            pic: "./assets/images/head-icon-e.jpg",
            name: "用户e，有很长很长很长很长的用户名"
        },
        {
            name: "测试用用户组",
            isGroup: true,
            users: [
                {
                    id: "a",
                    pic: "./assets/images/head-icon-a.jpg",
                    name: "用户A"
                },
                {
                    id: "b",
                    pic: "./assets/images/head-icon-b.jpg",
                    name: "用户b"
                },
                {
                    id: "c",
                    pic: "./assets/images/head-icon-c.jpg",
                    name: "用户c"
                },
                {
                    id: "d",
                    pic: "./assets/images/head-icon-d.jpg",
                    name: "用户d"
                },
                {
                    id: "e",
                    pic: "./assets/images/head-icon-e.jpg",
                    name: "用户e，有很长很长很长很长的用户名"
                }
            ]
        }
    ]

    ngOnInit() {
        let that = this;
        if (that.searchInput.nativeElement) {
            that.searchInput.nativeElement.addEventListener("focus", () => {
                that.inputFocus = true;
            }, false);
            that.searchInput.nativeElement.addEventListener("blur", () => {
                that.inputFocus = false;
            }, false);
        }
    }

    searchClick() {
        this.searchInput.nativeElement.focus();
    }
}