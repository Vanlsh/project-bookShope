export function truncateTextByWord(text) {
    const maxLength = 20;
    const words = text.split(' '); 
    let truncatedText = '';
    let currentLength = 0;
  
    for (const word of words) {
      const wordLength = word.length;
      if (currentLength + wordLength + 1 > maxLength) {
        truncatedText += '...'; 
        break; 
      }
      truncatedText += word + ' '; 
      currentLength += wordLength + 1; 
    }
  
    return truncatedText.trim();
  }
  