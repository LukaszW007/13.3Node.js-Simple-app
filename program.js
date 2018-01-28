process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    var lang = process.env.lang;
    var ver = process.version;
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case 'language':
                process.stdout.write(lang + "\n");
                break;
            case 'version':
                process.stdout.write(ver + '\n');
                break;
            case 'exit':
                process.stdout.write('quitting app!\n');
                process.exit();
                break;
            default:
                process.stderr.write('wrong instruction\n');
        }
    }

});