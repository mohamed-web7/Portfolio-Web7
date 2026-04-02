//--------------------------------------------------------------------------
//          تغيير مكان الخط للروابط تأثير الانتقال
//--------------------------------------------------------------------------

let linksHeader = document.querySelectorAll("header .my-container .right_nav nav a");
function changeBorder(link){
    linksHeader.forEach(linke =>{
        linke.classList.remove("active")
    });
    link.classList.add("active")
}

//--------------------------------------------------------------------------
//          تغيير أيقونة فتح الروابط للهواتف
//--------------------------------------------------------------------------


function showLink(icone){
    let navHeaderPhone = document.getElementById("navHeaderPhone");
    navHeaderPhone.classList.toggle("show");
    if(navHeaderPhone.classList.contains("show")){
        icone.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`
    }else{
        icone.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#e3e3e3"><path d="M120-680v-80h720v80H120Zm0 480v-80h720v80H120Zm0-240v-80h720v80H120Z"/></svg>`
    }
    

}
//--------------------------------------------------------------------------
//          دالة ارسال البيانات
//--------------------------------------------------------------------------

function submiteData(e){
    e.preventDefault();
    let name = document.getElementById("NameForm").value ;
    let email = document.getElementById("EmailForm").value ;
    let type = document.getElementById("type_service").value ;
    let service = document.getElementById("service").value ;
    let package = document.getElementById("package").value ;
    let description = document.getElementById("description").value ;

    
    let message = `الاسم : ${name} || email : ${email} || نوع الخدمة : ${type} || تصنيف الخدمة : ${service} || نوع الباقة المختارة : ${package} || تفاصيل المشروع : ${description}`;

    if(name.trim() != "" && email.trim() != "" && type != "" && service != "" && package != "" && description.trim() != ""){
        // window.open(`https://wa.me/+213776819127?text=${message}`);
        window.location.href = `https://wa.me/+213776819127?text=${message}`;

        name="";
        email="";
        type="";
        service="";
        package="";
        description="";
    }else{
        window.alert("المعذرة يرجى ملئ كل الخانات بمعلومات المشروع و ذلك كي أفهم اختيارك الصحيح")
    }
}

//--------------------------------------------------------------------------
//          دالة تحديد الباقة
//--------------------------------------------------------------------------

function selectPackage(type,package){
    document.getElementById("type_service").value = type ;
    document.getElementById("package").value = package;

    document.getElementById("ContactSection").scrollIntoView();
}
//--------------------------------------------------------------------------
//          دالة  FAQ
//--------------------------------------------------------------------------

function FAQ(item){
    let items = document.querySelectorAll(".faq .my-container .faq_grid .item");
    items.forEach(el =>{
        if(el !== item){ 
            el.classList.remove("active");
        }
    })
    item.classList.toggle("active")
}
//--------------------------------------------------------------------------
//          دالة  ظهور العناصر
//--------------------------------------------------------------------------

function Observation(){

    let Elemnts = document.querySelectorAll('.services .my-container .services_grid .card , .portfolio .my-container .cardes .card , .why .my-container .boxes .box , .process .my-container .steps .step , .pricing .my-container .pricing_grid .card');

    let options = {
        root: null,
        threshold: 0.2,
    };
    let Observer = new IntersectionObserver((infos) =>{
        infos.forEach((info)=>{
            if(info.isIntersecting){
                info.target.style.transform = 'translateY(0)';
                info.target.style.opacity = '1';
            }
        })
    },options);

    Elemnts.forEach((el)=>{
        el.style.transform = 'translateY(30px)';
        el.style.opacity = '0';
        el.style.transition = 'all 0.5s';
        Observer.observe(el);
    })

}
Observation();
//--------------------------------------------------------------------------
//          دالة  عرض المشاريع
//--------------------------------------------------------------------------


    let realEstateProject = document.getElementById("realEstateProject");
    let dentistProject = document.getElementById("dentistProject");
    let hotelProject = document.getElementById("hotelProject");
    
    function openProject(nameProject){
        if(nameProject == 'realEstate'){
            realEstateProject.style.display = 'flex';
        }else if(nameProject == 'dentist'){
            dentistProject.style.display = 'flex';
        }else if(nameProject == 'hotel'){
            hotelProject.style.display = 'flex';
        }
    }
    
    
    function closing(card){
        if(card == 'realEstate'){
            realEstateProject.style.display = 'none';
        }else if(card == 'dentist'){
            dentistProject.style.display = 'none';
        }else if(card == 'hotel'){
            hotelProject.style.display = 'none';
        }
    }

//--------------------------------------------------------------------------
//          دالة  تحديد القسم الحالي
//--------------------------------------------------------------------------

function activeLinkes(){

    let sections = document.querySelectorAll(".hero_content , .services , .portfolio , .process , .pricing , .contact");
    let linksHeaderr = document.querySelectorAll("header .my-container .right_nav nav a");

    window.addEventListener("scroll",()=>{
        let sectionActive = "";
        sections.forEach((section)=>{
            let spaceTop = section.offsetTop;
            if(pageYOffset >= spaceTop - 200){
                sectionActive = section.getAttribute('id');
            }
        });

        linksHeaderr.forEach((link)=>{
            link.classList.remove("active");
            if(link.getAttribute('href') == `#${sectionActive}`){
                link.classList.add('active');
            }else{
                link.classList.remove('active')
            }
        })

    })

};
activeLinkes()


let packWebFull = document.getElementById("packWebFull");
function showPack(){
    let iconeSP = document.querySelector(".pricing .my-container .show_more_packages .icon i")
    packWebFull.classList.toggle("activee")
    if(packWebFull.classList.contains("activee")){
        iconeSP.style.transform = "rotate(-180deg)";
    }else{
        iconeSP.style.transform = "rotate(0deg)";
    }
}