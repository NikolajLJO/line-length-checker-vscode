import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	console.log("launch");
		vscode.workspace.onDidChangeTextDocument(event => {
		let i = 0;
		if(event.document != undefined){
			while(i<event.document.lineCount){
				if(event.document.lineAt(i).text.length>=255){
					console.log("A line was changed and caught by line-length-highlighter");
					vscode.window.showInformationMessage("Line too long");
				}
				i++;
			}
		}
	});
}
export function deactivate() {}