# Happy thoughts Project
This site uses an external API to which you can send new posts (Happy thoughts) that will be displayed on the site. You can also like the thoughts displayed.

### The Problem
This week I worked with understanding how useEffect could be used to make the site working the way I wanted to. I was also trying to use useState to change how different things were displayed. I was really happy when I realised I could use it to change what version of the heart-icon that was being used depending on if the button was disabled or not, and if a thought was liked or not.

In the beginning I had a hard time fetching and posting thoughts because I put curly brackets where they shouldn't be, but once that was solved it worked fine. I was also struggling with how to display the time of the posting in the right way. First I tried doing the math myself by using new Date - but that just led to errors. Then I tried moments.js, which didn't work either. Finally a friend gave me the advise to use date.fns and then I was back on track.

If I had more time I would have liked to use "local storage" to save what posts had already been like between the different renderings of the site.

### View it live
https://boisterous-brioche-b12b23.netlify.app/
