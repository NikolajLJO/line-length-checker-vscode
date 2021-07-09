import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
		vscode.workspace.onDidChangeTextDocument(event => {
		let i = 0;
			if (event.document !== undefined) {
				let config = vscode.workspace.getConfiguration('line-length-highlighter');
				let max = config.lineLength;
				while (i < event.document.lineCount) {
					if (event.document.lineAt(i).text.length >= max) {
					console.log("A line was changed and caught by line-length-highlighter bitch");
					let number = (i+1).toString();
					vscode.window.showInformationMessage("Line " + number + " too long");
				}
				i++;
			}
		}
	});
}
export function deactivate() {}
