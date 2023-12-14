
const mainMain = document.querySelector('main');

//const buttonMenuFilterMeat = document.querySelector('.button-menu-filter-meat');
//const buttonMenuFilterSandwishPizza = document.querySelector('.button-menu-filter-sandwishpizza');
//const buttonMenuFilterDrinks = document.querySelector('.button-menu-filter-drinks');









const buttonMenuFilters = document.querySelectorAll('.button-menu-filter');
const liSubmenuFilter = document.querySelectorAll('.li-submenu-filter');
const buttonMenuFilterSub1 = document.querySelectorAll('.button-menu-filter-sub1');
const buttonMenuFilterSub2 = document.querySelectorAll('.button-menu-filter-sub2');
const buttonMenuFilterSub3 = document.querySelectorAll('.button-menu-filter-sub3');
const buttonMenuFilterSub4 = document.querySelectorAll('.button-menu-filter-sub4');

const sectionMenuBbqMeats = document.querySelector('.section-meny-bbqmeats');
const subSectionsBbqMeats = document.querySelectorAll('.sub-section-meny-bbqmeats');

const sectionMenuSandwichPizza = document.querySelector('.section-meny-sandwichpizza');
const subSectionsMenuSandwichPizza = document.querySelectorAll('.sub-section-meny-sandwishpizza');

const sectionMenuDrinksAndSides = document.querySelector('.section-meny-drinksandsides');
const subSectionsMenuDrinksAndSides = document.querySelectorAll('.sub-section-meny-drinksandsides');

const sectionMenuDesserts = document.querySelector('.section-meny-desserts');
const subSectionsMenuDesserts = document.querySelectorAll('.sub-section-meny-desserts');

const sectionMenuCat = document.querySelectorAll('.section-menu-cat');




function menuFilters(){
   
    // Första raden filter
    for(let i = 0; i < buttonMenuFilters.length; i++){
        buttonMenuFilters[i].addEventListener('click', () => {
            for(let j = 0; j < buttonMenuFilters.length; j++){
                if(j === i){
                    liSubmenuFilter[j].classList.remove('hide');
                    buttonMenuFilters[j].classList.add('button-active');
                    sectionMenuCat[j].classList.remove('hide');
                        if(j === 0){
                            subSectionsBbqMeats[0].classList.remove('hide');
                        } else if(j === 1){
                            subSectionsMenuSandwichPizza[0].classList.remove('hide');
                        } else if(j === 2){
                            subSectionsMenuDrinksAndSides[0].classList.remove('hide');
                        } else if(j === 3){
                            subSectionsMenuDesserts[0].classList.remove('hide');
                        }
                } else {
                    liSubmenuFilter[j].classList.add('hide');
                    buttonMenuFilters[j].classList.remove('button-active');
                    sectionMenuCat[j].classList.add('hide');
                }
            }
        })
    }

    // Andra raden filter. BBQ & Meat
   for(let i = 0; i < buttonMenuFilterSub1.length; i++){
        buttonMenuFilterSub1[i].addEventListener('click', () => {
            for(let j = 0; j < buttonMenuFilterSub1.length; j++){
                if(j === i){
                    buttonMenuFilterSub1[j].classList.add('button-sub-active');
                    subSectionsBbqMeats[j].classList.remove('hide');
                } else {
                    buttonMenuFilterSub1[j].classList.remove('button-sub-active');
                    subSectionsBbqMeats[j].classList.add('hide');
                }
            }

            
    });
   }

   // Andra raden,  Sandwich & pizza
   for(let i = 0; i < buttonMenuFilterSub2.length; i++){
        buttonMenuFilterSub2[i].addEventListener('click', () => {
            for(let j = 0; j < buttonMenuFilterSub2.length; j++){
                if(j === i){
                    buttonMenuFilterSub2[j].classList.add('button-sub-active');
                    subSectionsMenuSandwichPizza[j].classList.remove('hide');
                } else {
                    buttonMenuFilterSub2[j].classList.remove('button-sub-active');
                    subSectionsMenuSandwichPizza[j].classList.add('hide');
                }
            }

        
        });
    }

    //Andra raden, drinks & sides
    for(let i = 0; i < buttonMenuFilterSub3.length; i++){
        buttonMenuFilterSub3[i].addEventListener('click', () => {
            for(let j = 0; j < buttonMenuFilterSub3.length; j++){
                if(j === i){
                    buttonMenuFilterSub3[j].classList.add('button-sub-active');
                    subSectionsMenuDrinksAndSides[j].classList.remove('hide');
                } else {
                    buttonMenuFilterSub3[j].classList.remove('button-sub-active');
                    subSectionsMenuDrinksAndSides[j].classList.add('hide');
                }
            }
        });
    }

    // Andra raden, desserts
    for(let i = 0; i < buttonMenuFilterSub4.length; i++){
        buttonMenuFilterSub4[i].addEventListener('click', () => {
            for(let j = 0; j < buttonMenuFilterSub4.length; j++){
                if(j === i){
                    buttonMenuFilterSub4[j].classList.add('button-sub-active');
                    subSectionsMenuDesserts[j].classList.remove('hide');
                } else {
                    buttonMenuFilterSub4[j].classList.remove('button-sub-active');
                    subSectionsMenuDesserts[j].classList.add('hide');
                }
            }
        });
    }
    





}

menuFilters();
















// const object1 = {
//     a: 'somestring',
//     b: 42,
//   };
  
 // for (const [key, value] of Object.entries(db.bbqs.id)) {
   // console.log(`${key}: ${value}`);
  //}















  const arrayOfBbq = [...db.bbqs];
  const arrayOfBurgers = [...db.burgers];
  const arrayOfFriedChicken = [...db.friedChicken];
  const arrayOfFriedChicken2 = [...db["friedChicken"]];
  

  function generateMenu(){

    const dishesFragment = document.createDocumentFragment();

    for(let i = 0; i < arrayOfBbq.length; i++){

        const newArticle = document.createElement('article');
        const articleAttr = document.createAttribute('data-id');
        articleAttr.value = arrayOfBbq[i]["id"];
        newArticle.setAttributeNode(articleAttr);

        const dishName = document.createElement('p');
        dishName.textContent = arrayOfBbq[i]["name"];
        dishName.classList.add('p-name');
        //const dishName = document.createTextNode(arrayOfBbq[i]["name"]);
        newArticle.appendChild(dishName);
        

        

        dishesFragment.appendChild(newArticle);
        
    }
    mainMain.appendChild(dishesFragment);

  }
  generateMenu();