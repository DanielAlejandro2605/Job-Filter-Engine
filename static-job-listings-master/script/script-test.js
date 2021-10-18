const dataJobs = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
]
let dataJobsCopy = [];

const filterEngine = document.getElementById("filter-engine");
const jobsCards = document.getElementById('main-container');
const originalHTML = getHTML(dataJobs);
// const originalHTML = getHTML(dataJobs).join("");
// let currentHTML = originalHTML;
// console.log("Current");
// console.log(currentHTML);
// console.log("Original");
// console.log(originalHTML);
// console.log("Original");
// ACTION
// Create filter buttons dinamically
createFilterEngine();
createJobsCards(dataJobs);
// Creating JOB CARDS

function createJobsCards(jobItems){
    let cards = getHTML(jobItems);
    jobsCards.innerHTML = cards;
}

function getHTML(data){
  return data.map(function(job){
    return `<article class="job-card">
    <img src="${job.logo}">
    <div class="company-information">
      <h5 class="company-name">${job.company}</h5>
      <h4 class="job-position">${job.position}</h4>
      <div class="job-features">
        <span>${job.postedAt} -</span>
        <span>${job.location} -</span>
        <span>${job.contract}</span>
      </div>
    </div>
    <div class="job-skills">
      ${getTagsJob(job)}
    </div>
  </article>`
  }).join('');
}

function getTagsJob(job){
    let tags = [job.role, job.level, ...job.languages, ...job.tools];
    let tagsHTML = '';
    for(let i = 0; i < tags.length; i++){
      tagsHTML += `<span>${tags[i]}</span>`;
    } 
    return tagsHTML;
}


// FILTER BUTTONS
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(function(filterBtn){
    filterBtn.addEventListener('click', function(){
        returnCategory(filterBtn)
    });
})
function returnCategory(filterBtn){
    let category = filterBtn.parentNode.previousSibling.textContent;
    let filterJob = filterBtn.textContent.trim();
    let selectionListJobs;
    if(category == 'ROLES'){
        selectionListJobs = dataJobs.filter(function(job){
            if(filterJob === job.role){
                return job;
            }
        });
    } else if(category == 'LEVELS'){
        selectionListJobs = dataJobs.filter(function(job){
            if(filterJob === job.level){
                return job;
            }
        });
    }
    if(dataJobsCopy.length != selectionListJobs.length){
        if(toggleSelectiongButton(filterBtn)){
            handleDataJobs(dataJobsCopy, selectionListJobs, "r");
        } else{
            handleDataJobs(dataJobsCopy, selectionListJobs, "a");
        }
        createJobsCards(dataJobsCopy);
    } else {
        toggleSelectiongButton(filterBtn);
        createJobsCards(dataJobs);
        dataJobsCopy = [];
    }
}

// REVISAR QUE LOS ID SEAN LOS QUE QUIERO BORRAR!!!!
// FILTER BY ROLE
// const rolesButtons = document.querySelectorAll('.role');

// rolesButtons.forEach(function(button){
//     button.addEventListener('click', function(){
//         let filterJob = button.textContent.trim();
//         let selectionListJobs = dataJobs.filter(function(job){
//             if(filterJob === job.role){
//               return job;
//             }
//         });
//         if(dataJobsCopy.length != selectionListJobs.length){
//             if(toggleSelectiongButton(button)){
//                 handleDataJobs(dataJobsCopy, selectionListJobs, "r");
//                 console.log(dataJobsCopy);
//             } else{
//                 handleDataJobs(dataJobsCopy, selectionListJobs, "a");
//             }
//             createJobsCards(dataJobsCopy);
//         } else {
//             toggleSelectiongButton(button);
//             createJobsCards(dataJobs);
//             dataJobsCopy = [];
//         }
//     })
// })

// FILTER BY LEVEL
// const levelsButtons = document.querySelectorAll('.level');
// levelsButtons.forEach(function(button){
//   button.addEventListener('click', function(){
//     let filterJob = button.textContent.trim();
//         let selectionListJobs = dataJobs.filter(function(job){
//             if(filterJob === job.level){
//               return job;
//             }
//         });
//         if(dataJobsCopy.length != selectionListJobs.length){
//             if(toggleSelectiongButton(button)){
//                 handleDataJobs(dataJobsCopy, selectionListJobs, "r");
//                 console.log(dataJobsCopy);
//             } else{
//                 handleDataJobs(dataJobsCopy, selectionListJobs, "a");
//             }
//             createJobsCards(dataJobsCopy);
//         } else {
//             toggleSelectiongButton(button);
//             createJobsCards(dataJobs);
//             dataJobsCopy = [];
//         }
//   })
// });

function handleDataJobs(copy, selection, instruction){
    if(copy.length == 0){
        for(let jobSelected of selection){
            copy.push(jobSelected);
        }
    } else {
        if(instruction == 'a'){
            selection.filter(jobSelected => copy.push(jobSelected));
        } else if(instruction == 'r'){
            result = copy.filter(function (o1) {
                return !selection.some(function (o2) {
                    return o1.id === o2.id; // return the ones with equal id
               });
            });
            dataJobsCopy = [...result];
        }
    }
}

function toggleSelectiongButton(button){
    let origin = button.textContent;
    if(button.innerHTML.includes("img")){
        button.innerHTML = `<span class="filter-label">${origin}</span>`
        return true;
    } else {
        button.innerHTML += `<img class="icon-remove" src="./images/icon-remove.svg">`
        return false;
    }
}



// CREATING BUTTONS DINAMYCALLY

function createFilterEngine(){
    createRolesBtns();
    createLevelsBtns();
    createContractBtns();
    createLocationsBtns();
    createLanguagesBtns();
    createToolsBtns();
}
  
function createRolesBtns(){
    const roles = getRoles();
    // Create filter div
    let filterDiv = document.createElement('div');
    filterDiv.className = 'filter-div';
    // Create subtitle div
    let subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = `<h4>ROLES</h4><img class="icon" src="./images/user.png">`;
    // Create filter buttons div
    let btnContainer = document.createElement('div');
    btnContainer.className = 'filter-btns-container';
    let btnsByRole = roles.map(function(role){
      return `<button class="filter-btn role" type="button" data-id="role">
                <span class="filter-label">${role}</span>
              </button>`
    }).join("");
    btnContainer.innerHTML = btnsByRole;
    // Modifying the document 
    filterDiv.append(subtitle);
    filterDiv.append(btnContainer);
    filterEngine.append(filterDiv);
  }
  
function createLevelsBtns(){
    const levels = getLevels();  
    // Create filter div
    let filterDiv = document.createElement('div');
    filterDiv.className = 'filter-div';
    // Create subtitle div
    let subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = `<h4>LEVELS</h4><img class="icon" src="./images/promotions.png">`;
    // Create filter buttons div
    let btnContainer = document.createElement('div');
    btnContainer.className = 'filter-btns-container';
    let btnsByLevel = levels.map(function(level){
      return `<button class="filter-btn level" type="button" data-id="level">
                <span class="filter-label">${level}</span>
              </button>`
    }).join("");
    btnContainer.innerHTML = btnsByLevel;
    // Modifying the document 
    filterDiv.append(subtitle);
    filterDiv.append(btnContainer);
    filterEngine.append(filterDiv);
  }
  
function createContractBtns(){
    const contracts = getContracts();
    // Create filter div
    let filterDiv = document.createElement('div');
    filterDiv.className = 'filter-div';
    // Create subtitle div
    let subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = `<h4>CONTRACT</h4><img class="icon" src="./images/agreement.png">`;
    // Create filter buttons div
    let btnContainer = document.createElement('div');
    btnContainer.className = 'filter-btns-container';
    let btnsByContract = contracts.map(function(contract){
      return `<button class="filter-btn" type="button" data-id="contract">
                <span class="filter-label">${contract}</span>
              </button>`
    }).join("");
    btnContainer.innerHTML = btnsByContract;
    // Modifying the document 
    filterDiv.append(subtitle);
    filterDiv.append(btnContainer);
    filterEngine.append(filterDiv);
  }
  
  function createLocationsBtns(){
    const locations = getLocations();
    // Create filter div
    let filterDiv = document.createElement('div');
    filterDiv.className = 'filter-div';
    //Create subtitle div
    let subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = `<h4>LOCATION</h4><img class="icon" src="./images/placeholder.png">`;
    // Create filter buttons div
    let btnContainer = document.createElement('div');
    btnContainer.className = 'filter-btns-container';
    let btnsByLocation = locations.map(function(loc){
      return `<button class="filter-btn" type="button" data-id="contract">
                <span class="filter-label">${loc}</span>
              </button>`
    }).join("");
    btnContainer.innerHTML = btnsByLocation;
    // Modifying the document 
    filterDiv.append(subtitle);
    filterDiv.append(btnContainer);
    filterEngine.append(filterDiv);
  }
  
  function createLanguagesBtns(){
    const languages = getLanguages();
    // Create filter div
    let filterDiv = document.createElement('div');
    filterDiv.className = 'filter-div';
    // Create subtitle div
    let subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = `<h4>LANGUAGE</h4><img class="icon" src="./images/coding.png">`;
    // Create filter buttons div
    let btnContainer = document.createElement('div');
    btnContainer.className = 'filter-btns-container';
    let btnsByLanguage = languages.map(function(lan){
      return `<button class="filter-btn" type="button" data-id="language">
                <span class="filter-label">${lan}</span>
              </button>`
    }).join("");
    btnContainer.innerHTML = btnsByLanguage;
    // Modifying the document 
    filterDiv.append(subtitle);
    filterDiv.append(btnContainer);
    filterEngine.append(filterDiv);
  }
  
  function createToolsBtns(){
    const tools = getTools();
    // Create filter div
    let filterDiv = document.createElement('div');
    filterDiv.className = 'filter-div';
    // Create subtitle div
    let subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = `<h4>TOOLS</h4><img class="icon" src="./images/feature.png">`;
    // Create filter buttons div
    let btnContainer = document.createElement('div');
    btnContainer.className = 'filter-btns-container';
    let btnsByTools = tools.map(function(tool){
      return `<button class="filter-btn" type="button" data-id="tool">
                <span class="filter-label">${tool}</span>
              </button>`
    }).join("");
    btnContainer.innerHTML = btnsByTools;
    // Modifying the document
    filterDiv.append(subtitle);
    filterDiv.append(btnContainer);
    filterEngine.append(filterDiv);
  }
  
  function getRoles(){
    return dataJobs.reduce(
      function(values, item){
        if(!values.includes(item.role)){
          values.push(item.role);
        }
        return values;
      }, []
    );
  }
  
  function getLevels(){
    return dataJobs.reduce(
      function(values, item){
        if(!values.includes(item.level)){
          values.push(item.level);
        }
        return values;
      }, []
    );
  }
  
  function getContracts(){
    return dataJobs.reduce(
      function(values, item){
        if(!values.includes(item.contract)){
          values.push(item.contract);
        }
        return values;
      }, ["All"]
    );
  }
  
  function getLocations(){
    return dataJobs.reduce(
      function(values, item){
        if(!values.includes(item.location)){
          values.push(item.location);
        }
        return values;
      }, ["All"]
    );
  }
  
  function getLanguages(){
    return dataJobs.reduce((values, item) => {
      if(Array.isArray(item.languages)){
        let aux  = [];
        aux = item.languages;
        aux.forEach((e) => {
          if(!values.includes(e)){
            values.push(e);
          }
        })
      } else{
        if(!values.includes(item.languages)){
          values.push(item.languages);
        }
      }
      return values;
    }, ["All"]);
  }
  
  function getTools(){
    return dataJobs.reduce((values, item) => {
      if(Array.isArray(item.tools)){
        let aux  = [];
        aux = item.tools;
        aux.forEach((e) => {
          if(!values.includes(e)){
            values.push(e);
          }
        })
      } else{
        if(!values.includes(item.tools)){
          values.push(item.tools);
        }
      }
      return values;
    }, ["All"]);
  }