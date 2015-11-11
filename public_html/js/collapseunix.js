document.write('\
\
<h1>Unix Commands</h1>\
        <table border=1><tr><td><h2> Basic Command </h2></td>\
        <td><h2> Effect </h2></td></tr></div>\
        <tr><td> man example </td><td>\
                Opens the manual for a command. Press \'q\' to quit.  </td></tr>\
        <tr><td> whoami </td><td>\
                Prints the name of the current user </td></tr>\
        <tr><td> pwd </td><td>\
                Prints the name of the current directory </td></tr>\
        <tr><td> ls </td><td>\
                Lists the contents of the current directory </td></tr>\
        <tr><td> cd example </td><td>\
                Moves into the directory named example </td></tr>\
        <tr><td> touch example.txt </td><td>\
                Creates an empty file named "example.txt" </td></tr>\
        <tr><td> mkdir example </td><td>\
                Creates an empty directory named example </td></tr>\
        <tr><td> cat example.txt </td><td>\
                Prints out the contents of "example.txt" </td></tr>\
        <tr><td> file example.what </td><td>\
                Prints the type of the file </td></tr>\
        <tr><td> echo example example </td><td>\
                Prints out everything after echo, e.g. the words "example example" </td></tr>\
        <tr><td> nano example.txt </td><td>\
                Opens "example.txt" in an editor, so it can be modified </td></tr>\
        <tr><td> cp example.txt destination </td><td>\
                Copies "example.txt" into the destination directory </td></tr>\
        <tr><td> mv example.txt destination </td><td>\
                Moves "example.txt" into the destination directory </td></tr>\
        <tr><td> history </td><td>\
                Prints every command used in this session </td></tr> </table>\
\
        <br>\
\
        <table border=1><tr><td><h2> Intermediate Command </h2></td><td><h2> Effect </h2></td></tr>\
        <tr><td>keyboard command: Ctrl-C</td><td>\
                Terminates the foreground running process</td></tr>\
        <tr><td> rm example.txt </td><td>\
                Deletes "example.txt". This command can be dangerous.  </td></tr>\
        <tr><td> rmdir example </td><td>\
                Deletes the directory example </td></tr>\
        <tr><td> vi example.txt </td><td>\
                Opens "example.txt" in a more powerful editor </td></tr>\
        <tr><td> more example.txt </td><td>\
                Opens "example.txt" in a file viewer </td></tr>\
        <tr><td> less example.txt </td><td>\
                Opens "example.txt" in a more powerful file viewer </td></tr>\
        <tr><td> ifconfig -a </td><td>\
                Displays the current internet information </td></tr>\
        <tr><td> ls regex </td><td>\
                Displays all files in a directory matching the regex.<br>\
                Regex stands for regular expression. It is a way to limit results intelligently<br>\
                The normal ls command is equivalent to " ls * ". Try using " ls *.txt " instead.  </td></tr>\
        <tr><td> su user </td><td>\
                Logs you in as the user, "user". Can be left blank to log in as root.  </td></tr>\
        <tr><td> sudo command </td><td>\
                Runs the command with administrator privileges </td></tr>\
        <tr><td> chmod 755 example.txt </td><td>\
                Makes a file an executable. 755 is standard for a normal executable.<br>\
                The 3 digits stand for the permission levels of the User, Usergroup and World.  </td></tr>\
        <tr><td> ssh user@machine </td><td>\
                Accesses another machine on the internet by logging in as "user" </td></tr>\
        <tr><td> exit </td><td>\
                Exits the current connection<br>\
                Connections can be: a user session, an ssh session, etc.  </td></tr>\
        <tr><td> example = thing </td><td>\
                Stores thing in a variable called example.<br>\
                The contents of this variable can be accessed with $example.<br>\
                Try this script: (word=bird; echo word; echo $word;) </td></tr></table>\
\
        <br>\
\
        <table border=1><tr><td><h2> Advanced Command </h2></td>\
        <td><h2> Effect </h2></td></tr></div>\
\
        <tr><td> grep regex example.txt </td><td>\
                Searches "example.txt" for the given regex and prints matching lines </td></tr>\
\
        <tr><td> find startlocation -iname regex </td><td>\
                Searches every file in location for the name regex </td></tr>\
\
        <tr><td> scp<br> user@machine:source<br> user@machine:destination </td><td>\
                Securely copies files between machines.<br>\
                If you are using the local machine, user@source is not required.  </td></tr>\
\
        <tr><td> rsync<br> ssh<br> user@machine:source<br> user@machine:destination </td><td>\
                Securely copies the changes which have been made to files between machines.<br>\
                If you are using the local machine, ssh and user@source is not required.<br>\
                This is usually used with flags to determine which changes to sync.  </td></tr>\
\
        <tr><td>\
                if [ expression ]; then<br>\
                command...command<br>\
                else command...command<br>\
                fi </td><td>\
                Evaluates an expression. If it is true, it executes every command until "fi"<br>\
                This is usually used in scripts, so I\'ve displayed it on multiple lines.</td></tr>\
\
        <tr><td>\
                while [ expression ]; do<br>\
                command...command<br>\
                done<br>\
        </td><td>\
                Performs commands while an expression remains true<br>\
                This is usually used in scripts, so I\'ve displayed it on multiple lines.</td></tr>\
\
        <tr><td> !! </td><td>\
                Runs the last command again.<br>\
                This is usually used as " sudo !! ", on getting a permissions error.  </td></tr>\
\
        <tr><td> cd - </td><td>\
                Goes back to the most recent directory </td></tr>\
\
        <tr><td> echo hello world > example.txt </td><td>\
                Redirects the output of echo into the file "example.txt".<br>\
                This will overwrite the file if it exists.  </td></tr>\
\
        <tr><td> echo < "hello world" </td><td>\
                Redirects the words hello world into the input for the command echo</td></tr>\
\
        <tr><td> echo hello world | grep hello </td><td>\
                This creates a pipe, using the output of the first command as the input of the second command.\
        </td></tr></table>\
\
        <br>\
\
        <table border=1><tr><td><h2> Expert Command </h2></td>\
        <td><h2> Effect </h2></td></tr></div>\
\
        <tr><td>awk</td><td>\
                A pattern-matching and processing language</td></tr>\
\
        <tr><td>sed</td><td>\
                A stream editor and parser</td></tr></table>\
        <br><br><br><br>\
');