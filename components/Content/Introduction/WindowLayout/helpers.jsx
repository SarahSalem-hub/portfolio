
export function filterFolders (folders,folderIndex){
    const selectedFolder = folders.filter(folder => folder.id === folderIndex);
    
    return selectedFolder[0]
}