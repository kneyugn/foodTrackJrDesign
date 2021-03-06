import { Component } from "@angular/core";
import {FirebaseAuthService} from "../services/firebaseAuth.service";
import { FirebaseUserService } from "../services/firebaseUser.service";
import { last } from "rxjs/operators";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";
import { TextField } from "ui/text-field";

@Component({
    selector: "log-in",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css', "./css/icons.css"],
})

export class LoginComponent {

    private myItems: Array<SegmentedBarItem>;
    private segSelectedIndex: number = 0;
    private pencil = String.fromCharCode(0xe905);
    private key = String.fromCharCode(0xe98d);
    private loginEmailStr;
    private loginPswStr;
    private registEmailStr;
    private registUsrnmStr;
    private registFirstNmStr;
    private registLastNmStr;
    private registPswStr;
    private registCPwdStr;
    private notifications= null;
    private bpScores = null;
    private valid = true; // Used to ensure 1 notification update call

    constructor(private authService: FirebaseAuthService,
                private fbUser: FirebaseUserService) {
        this.myItems = [];
        const item1 = new SegmentedBarItem();
        item1.title = "Login";
        this.myItems.push(item1);
        const item2 = new SegmentedBarItem();
        item2.title = "Register";
        this.myItems.push(item2);
    }

    anonLogin() {
        this.authService.anonLogin();
    }

    login() {
        if (this.loginEmailStr && this.loginPswStr) {
            this.authService.emailPasswordLogin(this.loginEmailStr, this.loginPswStr);
        }
    }

    loginEmail(args) {
        let textField = <TextField>args.object;

        // console.log("loginEmail");
        this.loginEmailStr = textField.text;
        // textField.dismissSoftInput();
    }

    loginPsw(args) {
        let textField = <TextField>args.object;

        // console.log("loginPsw");
        this.loginPswStr = textField.text;
        // textField.dismissSoftInput();
    }

    register() {
        if (this.registEmailStr && this.registCPwdStr && this.registPswStr == this.registCPwdStr) {
            if (!this.registUsrnmStr) {
                this.registUsrnmStr = "jdoe123";
            }
            if (!this.registFirstNmStr) {
                this.registFirstNmStr = "Jane";
            }
            if (!this.registLastNmStr) {
                this.registLastNmStr = "Doe";
            }
            this.authService.emailPasswordRegister(this.registEmailStr, this.registUsrnmStr, this.registFirstNmStr, this.registLastNmStr, this.registPswStr);
        }
    }

    registEmail(args) {
        let textField = <TextField>args.object;

        // console.log("registEmail");
        this.registEmailStr = textField.text;
        // textField.dismissSoftInput();
    }

    registUsrnm(args) {
        let textField = <TextField>args.object;

        // console.log("registUsrnm");
        this.registUsrnmStr = textField.text;
        // textField.dismissSoftInput();
    }

    registFirstNm(args) {
        let textField = <TextField>args.object;

        // console.log("registFirstNm");
        this.registFirstNmStr = textField.text;
        // textField.dismissSoftInput();
    }

    registLastNm(args) {
        let textField = <TextField>args.object;

        // console.log("registLastNm");
        this.registLastNmStr = textField.text;
        // textField.dismissSoftInput();
    }

    registPsw(args) {
        let textField = <TextField>args.object;

        // console.log("registPsw");
        this.registPswStr = textField.text;
        // textField.dismissSoftInput();
    }

    registCPwd(args) {
        let textField = <TextField>args.object;

        // console.log("registCPwd");
        this.registCPwdStr = textField.text;
        // textField.dismissSoftInput();
    }


    onSelectedIndexChange(args) {
        let segmetedBar = <SegmentedBar>args.object;
        this.segSelectedIndex = segmetedBar.selectedIndex;
    }
}