# Git
# OBS: Jag kan ha missat något, och just därför var försiktig när du följer git-workflow om du är helt ny till git.

## Tutorial "Hur man börjar"


### Följ dessa steg om du inte redan har git installerat, annars följ: https://help.github.com/articles/set-up-git/

### -> Börja med att gå till vårt Repository https://github.com/t0kenz/DAT255
### -> Klicka på "Fork" 

![fork-image](https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png)

### -> Du har nu skapat ett eget repostitory med remotes länkat till origin-master. 

### -> Allt du behöver nu är en lokal klon. Detta gör du genom att:
    
    1. Se till att du har git installerat innan du börjar.
    
    2. Öppna terminal/cmd (CLI)
    
    3. Ändra cwd (current working directory) till där du vill skapa din lokala kopia.
    
    4. T.ex. cd C:\users\Linus\Documents\Github (Notera att '\' är för windows, '/' för unix-system :) )
    
    5. skriv git clone https://github.com/DITT_USER_NAME/DAT255

    6. Du har nu en lokal kopia av git-repot.

## Git-Workflow

    1. git checkout master                         // Making sure you're on the correct branch.
    2. git pull                                    // (= git pull origin master) To update local master
    3. git checkout -b myTask                      // (Namnet på din nya branch, byter även till den branchen)
    4. OPTIONAL: git branch -a                     // Kolla dina branches + git status 
    5. After max 30 min of coding or whatever, goto 6
    6. git commit -a -m "sensible message"         // Committa på din branch
    7. Goto 5 until task finished (max 2h before next point)
    8. Assume task finished. Project should be executable, all tests should pass.
    9. Now, integrate.
        a. git checkout master                     
        b. git pull                                // uppdatera local master 
        c. git checkout myTask                     // gå tillbaka till din branch myTask
        d. git rebase master                       // integrera din branch myTask ovanpå mastern
        e. git checkout master
        f. git merge myTask
        g. git push                                // (= git push origin master) Pushar till remote repo
        h. git branch -d myTask                    // ta bort din branch som du just skapat.
    

### -> Efter detta, gör en ny pull request(PR) i https://github.com/t0kenz/DAT255 
![pr-image](https://idratherbewriting.com/learnapidoc/images/github_new_pull_request.png)

### -> Välj din just skapta branch, fyll i relevanta fält och tryck sedan "Create pull request".
