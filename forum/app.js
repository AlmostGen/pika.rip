document.addEventListener('DOMContentLoaded', function(){
    function getCurrentTime(){
      const userLang = navigator.language || 'en-US';
      // uses english as a fallback
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const currentTime = new Date().toLocaleString(userLang, {timeZone: userTimeZone});
      return currentTime;
    }
    function updateTime(){
      const timeElement = document.getElementById('time');
      const timezonePlaceholderElement = document.getElementById('timezone');
  
      if(timeElement){
        timeElement.textContent = getCurrentTime();
      }
  
      if(timezonePlaceholderElement){
        const formattedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone.replace(/_/g, ' ');
        timezonePlaceholderElement.textContent = formattedTimeZone;
      }
    }
  
    updateTime();
    setInterval(updateTime, 1000);
  });
  
