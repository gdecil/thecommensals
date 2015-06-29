<<<<<<< HEAD
var r ;
var sourceSwap0 = function () {
  $(this).switchClass( "search", "search1");
  switch(this.id) {
    case "1":
      r = Raphael("holder", 800, 480),
      fonts = [0, r.getFont("1"), r.getFont("2"), r.getFont("3"), r.getFont("whoa")],
      custom = r.print(50, 50, "Ciao Pippo", fonts[4], 60).attr({fill: "#00008b"})            

      //var html = "<div class='imgCaption'><a href='/theCommensals/app/image/background1.jpg'>Ricetta:<br />1 fresco </a></div>"
        break;
    case "2":
      r = Raphael("holder", 800, 480);
      var text1 = r.text(590,250,"What is happiness?\nThe feeling that power \nincreases - that resistance \nis being overcome.\n Friedrich Nietzsche").
	attr({"font-size": "22px", "font-weight": "800", fill: "blue", stroke:"brown", "stroke-width": "1px"});

      //var html = "<div class='imgCaption'><a href='/theCommensals/app/image/background1.jpg'>Ricetta:<br />2 fresco </a></div>"
        break;
    case "3":
      var html = "<div class='imgCaption'><a href='/theCommensals/app/image/background1.jpg'>Ricetta:<br />3 fresco </a></div>"
        break;
    case "4":
      var html = "<div class='imgCaption'><a href='/theCommensals/app/image/background1.jpg'>Ricetta:<br />4 fresco </a></div>"
        break;
    case "5":
      var html = "<div class='imgCaption'><a href='/theCommensals/app/image/background1.jpg'>Ricetta:<br />5 fresco </a></div>"
        break;
    case "6":
      var html = "<div class='imgCaption'><a href='/theCommensals/app/image/background1.jpg'>Ricetta:<br />6 fresco </a></div>"
        break;
    default:
        var html = "<div class='imgCaption'><a href='/theCommensals/app/image/background1.jpg'>Ricette:<br />pane fresco </a></div>"
  }
  //$( this ).parent().append(html)
  $("body").prepend(html)
}

var sourceSwap1 = function () {
  $(this).switchClass( "search1", "search");
  $('.imgCaption').remove()
  r.clear();
  $('#holder').html("")
}

var checkUserIsLoggedIn = function () {
    var username = $.session.get("username");
    if (username == null || username == undefined || username == "") {
        alert("You are not logged in: You cannot insert or update data!")
        return false;
    };
    return true;
}

var getObjects = function (obj, key, val) {
            var objects = [];
            for (var i in obj) {
                if (!obj.hasOwnProperty(i)) continue;
                if (typeof obj[i] == 'object') {
                    objects = objects.concat(getObjects(obj[i], key, val));
                } else if (i == key && obj[key] == val) {
                    objects.push(obj);
                }
            }
            return objects;
        }
=======
var addToReaction = function (db,rea) {
//  var title = $(".ui-dialog-title")[0].innerHTML;
  var id = $('#txtLabels')[0].value
  var type = $("select option:selected")[0].innerHTML
>>>>>>> 29674b4b4c7948a9e39f84cd89527e215fc448c9

  if (db=='CT') {
    if (rea=='reag') {
        var mw = $("#batchMW")[0].value ;
        var mf = $("#batchMF")[0].value;

        if (mw==undefined || mw==0) {
            alert("Please select a reagent");
            return;
        }
        loadReagents(mw, mf, $("#molfile")[0].value, type + ': ' + id);
        //alert("1");
    }
    else {
        var mw = $("#batchMW")[0].value;
        var mf = $("#batchMF")[0].value;
        if (mw == undefined || mw == 0) {
            alert("Please select a Product");
            return;
        }
        loadProducts(mw, mf, $("#molfile")[0].value, type + ': ' + id);
    }
  }
  else {
      if (rea=='reag') {
          var mw = $("#batchMW")[0].value;
          var mf = $("#batchMF")[0].value;
          if (mw == undefined || mw == 0) {
              alert("Please select a reagent");
              return;
          }
          var formul = getRowSelected('#myGridFormFind');
          if (formul.structure_id==undefined) {
              alert("Please select a formulation");
              return;
          }
          loadReagents(mw, mf, $("#molfile")[0].value, type + ': ' + id);

      }
      else if (rea=='solvent') {
          var mw = $("#batchMW")[0].value;
          var mf = $("#batchMF")[0].value;
          if (mw == undefined || mw == 0) {
              alert("Please select a Solvent");
              return;
          }
          var formul = getRowSelected('#myGridFormFind');
          if (formul.structure_id == undefined) {
              alert("Please select a formulation");
              return;
          }
          loadSolvent(mw, mf, $("#molfile")[0].value, type + ': ' + id);

      }
      else {
          var mw = $("#batchMW")[0].value;
          var mf = $("#batchMF")[0].value;
          if (mw == undefined || mw == 0) {
              alert("Please select a Product");
              return;
          }
          var formul = getRowSelected('#myGridFormFind');
          if (formul.structure_id == undefined) {
              alert("Please select a formulation");
              return;
          }
          loadProducts(mw, mf, $("#molfile")[0].value, type + ': ' + id);
      }
  }  

}
    
var searchCT = function () {
    clearSearchCT()
    $("body").toggleClass("wait");

    var type = $('.ngdialog-content select').val();

    var title = $('.ngdialog-content')[0].innerText;
    $("#batchMW")[0].value = "";
    $("#batchMF")[0].value = "";
    $("#batch").html("");
    var tmp = $("#txtLabels")[0].value.toUpperCase();

    if (title.indexOf("Chemtools") >= 0) {
        if(type == "batch"){
          var batchData = getBatch(tmp);          
        }
        else {
           var batchData = getCorpId(tmp);
        }
        
        appendMolecule('#resizeMolB', batchData[0].str_id);  
//        var ret = getMolecule(batch, "chemtools", type);
    }
    else {
        var batchData = getBottle(tmp, type)

        var mydata = getBottleForm(tmp, type)
        var grid = $("#myGridFormFind");
        grid.jqGrid('GridUnload');
        cgFormulations(mydata)
        appendMolecule('#resizeMolB', batchData[0].structure_id, "bottle");  
    }


    $("#batchMW")[0].value =batchData[0].molweight;
    $("#batchMF")[0].value = batchData[0].molformula;
    $("#molfile")[0].value = batchData[0].compound;

    $("body").toggleClass("wait");
}

var clearSearchCT = function () {
    $("#batchMW")[0].value = "";
    $("#batchMF")[0].value = "";
    $("#batch").html("");
    $("#molfile")[0].value = "";
    var grid = $("#myGridFormFind");
    grid.jqGrid('GridUnload');
}

var FindAll= function (ngDialog) {
//    Clear();
    var ketcher = getKetcher();
    if (ketcher) {
        var rxn = ketcher.getMolfile();
        if (rxn.length==102) {
            rxn = exp.Rxn;
        }
        ngDialog.open({
            template: 'firstDialog',
            controller: 'FirstDialogCtrl',
            className: 'ngdialog-theme-default ngdialog-theme-custom'
        });

        var tot = [];
        getReactionsData(rxn).done(function(rxnIDs) {
          $.each(rxnIDs, function (m, z) {
            if(jQuery.type( z )=='object'){
              tot.push(z);                  
            }
          });

          var molecules = FromReactionToMolecules(rxn);

          $.each(molecules, function (n, v) {
              var molData = getReactionsMolecules(v.rxn)
              $.each(molData, function (m, z) {
                if(jQuery.type( z )=='object'){
                  tot.push(z);                  
                }
              });
          });

          cgReactionsData(tot);
        })
    }
}

var addFromCT= function (ngDialog) {
//    Clear();
    var ketcher = getKetcher();
    if (ketcher) {
/*
        var rxn = ketcher.getMolfile();
        if (rxn.length==102) {
            rxn = exp.Rxn;
        }
*/
        ngDialog.open({
            template: 'addFromChemtoolDialog',
            controller: 'addFromChemtoolCtrl',
            className: 'ngdialog-theme-default ngdialog-theme-custom'
        });
    }
}

var addFromBottle= function (ngDialog) {
//    Clear();
    var ketcher = getKetcher();
    if (ketcher) {
/*
        var rxn = ketcher.getMolfile();
        if (rxn.length==102) {
            rxn = exp.Rxn;
        }
*/
        ngDialog.open({
            template: 'addFromBottleDialog',
            controller: 'addFromBottleCtrl',
            className: 'ngdialog-theme-default ngdialog-theme-custom'
        });
    }
}

var clearStoic = function () {
    $("#myReactant").jqGrid('GridUnload');
    $("#myProducts").jqGrid('GridUnload');
}

function loadReagents(mw, mf, molfile, bn) {
    var formul = getRowSelected('#myGridFormFind');

    var reags = jQuery("#myReactant").getRowData()
    if (reags.length == undefined) {
        var reags = [];
    }
    var reag = {};

    reag.id = reags.length + 1
    reag.BATCH_NUMBER = bn;
    reag.NOTEBOOK= "";
    reag.EXPERIMENT= "";
    reag.CHEMICAL_NAME= formul.FORMULATION_NAME;
    reag.BATCH_MW_VALUE= mw;
    reag.MOLECULAR_FORMULA= mf;
    reag.BATCH_TYPE = "REAGENT";
    reag.MOLE_VALUE= "";
    reag.MOLE_UNIT_CODE= "";
    reag.PURITY_VALUE = parseFloat(formul.PURITY, 10);
    reag.PURITY_UNIT_CODE= "";
    reag.VOLUME_VALUE= "";
    reag.VOLUME_UNIT_CODE= "";
    reag.MOLARITY_VALUE= "";
    reag.MOLARITY_UNIT_CODE= "";
    reag.DENSITY_VALUE = parseFloat(formul.DENSITY, 10);
    reag.DENSITY_UNIT_CODE= "";
    reag.WEIGHT_VALUE= "";
    reag.WEIGHT_UNIT_CODE= "";
    reag.CAS_NUMBER = formul.CAS_NUMBER;
    reag.USER_HAZARD_COMMENTS = formul.RISK_CODES + "; "+ formul.RISK_SYMBOLS + "; " + formul.SAFETY_CODES;

    reags.push(reag);

    var gridR = "#myReactant",
        pagerR = '#reactantspager',
        captionR = "Reagents";

    $("#gridR").html("");
    var html = "                                    <table id='myReactant'></table>" +
    "                                    <div id='reactantspager'></div> ";
    $("#gridR").append(html);

    cgProductsReagentsSave(reags, gridR, pagerR, captionR);
    var ketcher = getKetcher();

    var rxn = ketcher.getMolfile();
    var struc = CreateReaction(rxn, "", molfile);

    ketcher.setMolecule(struc);

}

function loadSolvent(mw, mf, molfile) {
    var formul = getRowSelected('#myGridFormFind');

    var reags = jQuery("#myReactant").getRowData()
    if (reags.length == undefined) {
        var reags = [];
    }
    var reag = {};

    reag.NOTEBOOK = "";
    reag.EXPERIMENT = "";
    reag.CHEMICAL_NAME = formul.FORMULATION_NAME;
    reag.BATCH_MW_VALUE = mw;
    reag.MOLECULAR_FORMULA = mf;
    reag.BATCH_TYPE = "SOLVENT";
    reag.MOLE_VALUE = "";
    reag.MOLE_UNIT_CODE = "";
    reag.PURITY_VALUE = parseFloat(formul.PURITY, 10);
    reag.PURITY_UNIT_CODE = "";
    reag.VOLUME_VALUE = "";
    reag.VOLUME_UNIT_CODE = "";
    reag.MOLARITY_VALUE = "";
    reag.MOLARITY_UNIT_CODE = "";
    reag.DENSITY_VALUE = parseFloat(formul.DENSITY, 10);
    reag.DENSITY_UNIT_CODE = "";
    reag.WEIGHT_VALUE = "";
    reag.WEIGHT_UNIT_CODE = "";
    reag.CAS_NUMBER = formul.CAS_NUMBER;
    reag.USER_HAZARD_COMMENTS = formul.RISK_CODES + "; " + formul.RISK_SYMBOLS + "; " + formul.SAFETY_CODES;

    reags.push(reag);

    var gridR = "#myReactant",
        pagerR = '#reactantspager',
        captionR = "Reagents";

    $("#gridR").html("");
    var html = "                                    <table id='myReactant'></table>" +
    "                                    <div id='reactantspager'></div> ";
    $("#gridR").append(html);

    cgProductsReagentsSave(reags, gridR, pagerR, captionR);
    var ketcher = getKetcher();

    var rxn = ketcher.getMolfile();
    var struc = CreateReaction(rxn, "", molfile);

    ketcher.setMolecule(struc);

}

function loadProducts(mw, mf, molfile, bn) {
    var formul = getRowSelected('#myGridFormFind');

    var reags = jQuery("#myProducts").getRowData()
    if (reags.length == undefined) {
        var reags = [];
    }
    var reag = {};

    reag.BATCH_NUMBER = bn;
    reag.NOTEBOOK = "";
    reag.EXPERIMENT = "";
    reag.CHEMICAL_NAME = formul.FORMULATION_NAME;
    reag.BATCH_MW_VALUE = mw;
    reag.MOLECULAR_FORMULA = mf;
    reag.BATCH_TYPE = "PRODUCT";
    reag.MOLE_VALUE = "";
    reag.MOLE_UNIT_CODE = "";
    reag.PURITY_VALUE = parseFloat(formul.PURITY, 10);
    reag.PURITY_UNIT_CODE = "";
    reag.VOLUME_VALUE = "";
    reag.VOLUME_UNIT_CODE = "";
    reag.MOLARITY_VALUE = "";
    reag.MOLARITY_UNIT_CODE = "";
    reag.DENSITY_VALUE = parseFloat(formul.DENSITY, 10);
    reag.DENSITY_UNIT_CODE = "";
    reag.WEIGHT_VALUE = "";
    reag.WEIGHT_UNIT_CODE = "";
    reag.CAS_NUMBER = formul.CAS_NUMBER;
    reag.USER_HAZARD_COMMENTS = formul.RISK_CODES + "; " + formul.RISK_SYMBOLS + "; " + formul.SAFETY_CODES;

    reags.push(reag);

    var gridR = "#myProducts",
        pagerR = '#Productspager',
        captionR = "Products";

    $("#gridP").html("");
    var html = "                                    <table id='myProducts'></table>" +
    "                                    <div id='Productspager'></div> ";
    $("#gridP").append(html);

    cgProductsReagentsSave(reags, gridR, pagerR, captionR);

    var ketcher = getKetcher();

    var rxn = ketcher.getMolfile();
    var struc = CreateReaction(rxn, molfile, "");

    ketcher.setMolecule(struc);
}

var loadStoic = function (rxn, counter, mole) {
    if (rxn.length == 102) {
        clearStoic();
        return;
    }

    if (rxn=="") {
        var mydataR = $.parseJSON(exp.getReagents()),
            divGR = $("#gridR"),
            divGP = $("#gridP"),
            idRgrid = 'myReactant',
            idRpage = 'reactantspager',
            idPgrid = 'myProducts',
            idPpage = 'Productspager',
        gridR = "#myReactant",
        pagerR = '#reactantspager',
        captionR = "Reagents";

        var mydataP = $.parseJSON(exp.getProducts()),
        gridP = "#myProducts",
        pagerP = '#Productspager',
        captionP = "Products";
    }
    else {
        if (counter != "") {
            var reagents = getReagentsIndigo(rxn)
            var mydataR = $.parseJSON(reagents),
            divGR = $("#gridR" + counter),
            divGP = $("#gridP" + counter),
            gridR = "#myReactant" + counter,
            pagerR = '#reactantspager' + counter,
            captionR = "Reagents",
            gridP = "#myProducts" + counter,
            pagerP = '#Productspager' + counter,
            idRgrid = 'myReactant' + counter,
            idRpage = 'reactantspager' + counter,
            idPgrid = 'myProducts' + counter,
            idPpage = 'Productspager' + counter,
            captionP = "Products";

            var products = getProductsIndigo(rxn)

            var mydataP = $.parseJSON(products);

        }
        else {
            var reagents = getReagentsIndigo(rxn)

            var mydataR = reagents,
                divGR = $("#gridR"),
                divGP = $("#gridP"),
                gridR = "#myReactant",
                pagerR = '#reactantspager',
                captionR = "Reagents",
                gridP = "#myProducts",
                pagerP = '#Productspager',
                idRgrid = 'myReactant',
                idRpage = 'reactantspager',
                idPgrid = 'myProducts',
                idPpage = 'Productspager',
                captionP = "Products";

            var products = getProductsIndigo(rxn)


            var mydataP = products;

//            var molecules = FromReactionToMolecules(rxn);
        }
    }
  
    if (rxn != "") {
        //prendo le densita da bottles
        $.each(mydataP, function (n, v) {
            var molData = getReactionsMolecules(v.COMPOUND)
            var density = 0;
            var purity = 0;
            $.each(molData, function (m, z) {
                if (z.DATABASE == "Bottles") {
                    density = z.DENSITY;
                    purity = z.PURITY;
                }
            });
            if (density != 0) {
                this.DENSITY_VALUE = density;
                this.PURITY_VALUE = purity;
            }
        });

        $.each(mydataR, function (n, v) {
            var molData = getReactionsMolecules(v.COMPOUND)
            var density = 0;
            var purity = 0;
            $.each(molData, function (m, z) {
                if (z.DATABASE == "Bottles") {
                    density = z.DENSITY;
                    purity = z.PURITY;
                }
            });
            if (density != 0) {
                this.DENSITY_VALUE = density;
                this.PURITY_VALUE = purity;
            }
        });
    }


    if (mydataR==null) {
        $(gridR).jqGrid('GridUnload');
    }
    else {
        divGR.html("");
        var html = "                                    <table id='" + idRgrid + "'></table>" +
        "                                    <div id='" + idRpage + "'></div> ";
        divGR.append(html);
        cgProductsReagentsSave(mydataR, gridR, pagerR, captionR, mole);
    }

    if (mydataP==null) {
        $(gridP).jqGrid('GridUnload');
    }
    else {
        divGP.html("");
        var html = "                                    <table id='" + idPgrid + "'></table>" +
        "                                    <div id='" + idPpage + "'></div> ";
        divGP.append(html);

        cgProductsReagentsSave(mydataP, gridP, pagerP, captionP, mole)
    }
}

var checkUserPwd = function (username, password) {
    var dataX = '{"user":"' + username + '","pwd":"' + password + '"}';

    var ret = $.ajax({
        type: "POST",
        url: server + "/Chemlink/CheckUser",
        data: dataX,
        contentType: "application/json; charset=utf-8",
        processData: false,
        dataType: "json",
        async: false
    }).responseText;
    var tmp = eval('(' + ret + ')');
    if (tmp.ExceptionType != undefined) {
        alert(tmp.Message)
        return tmp;
    }
    else {

        return ret;
    }
}

var checkUserIsLoggedIn = function () {
    var username = $.session.get("username");
    if (username == null || username == undefined || username == "") {
        alert("You are not logged in: You cannot insert or update data!")
        return false;
    };
    return true;
}

var appendReaction = function (containerId, rxnId) {
    $(containerId).html("");
    if (rxnId==null) {        
        return;
    }
    d = new Date();
    var src = server + '/render?idReaction=' + rxnId + '&' +d.getTime() ;
    img_height=200
    img_width=800

//    var img_height = $('#reaction1').height();
//    var img_width = $('#reaction1').width();
//    if(img_height==null){
//    }
    //$(containerId).append("<img id='moleculeB' src=" + src + " />");
    $(containerId).append("<img id='moleculeB' src=" + src + " style='width: " + img_width + "px; height: " + img_height + "px;'/>");
}

<<<<<<< HEAD
=======
var appendMolecule = function (containerId, Id, db, type) {
  $(containerId).html("");
  d = new Date();
  if (Id==null) {        
      return;
  }
  if (type == "Batch"){
      var src = server + '/render?batch=' + Id + '&' +d.getTime() ;
      img_height=100
      img_width=200      
  }
  else if (db == "bottle"){
      var src = server + '/render?bottle=' + Id + '&' +d.getTime() ;
      img_height=100
      img_width=200      
  }
  else {
      var src = server + '/render?strid=' + Id + '&' +d.getTime() ;
      img_height=100
      img_width=200      
    }

    $(containerId).append("<img id='moleculeB' src=" + src + " style='width: " + img_width + "px; height: " + img_height + "px;'/>");
}

>>>>>>> 29674b4b4c7948a9e39f84cd89527e215fc448c9
var searchOnline = function (ketcher){
    currentMolInfo=[]  
    
    if (ketcher){
        var mol =ketcher.getMolfile();
        if (mol.length > 105) {
            getSmileFromMol(mol)            
            getInchiFromMol(mol)
        }
    }
}

var searchSSS = function (ketcher){
    if (ketcher){
        var rxn =ketcher.getMolfile();
        if (rxn.length > 105) {
            var rxnIDs = getReactions(rxn,"SSS", $('#containerReaction'),"#myGridSearch")            
        }
    }
}

var searchMARSSS = function (ketcher){
    if (ketcher){
        var rxn =ketcher.getMolfile();
        if (rxn.length > 105) {
            var rxnIDs = getMolecules(rxn,"SSS", $('#containerReaction'),"#myGridSearch")            
        }
    }
}

var updateExperimentDetail = function(model){
  exp.GeneralDataReaction[0].batch_creator=model.batch_creator;  
  exp.GeneralDataReaction[0].continued_from_rxn=model.continued_from_rxn ; 
  exp.GeneralDataReaction[0].continued_to_rxn=model.continued_to_rxn;
  exp.GeneralDataReaction[0].creation_date=model.creation_date; 
  exp.GeneralDataReaction[0].experiment=model.experiment;   
  exp.GeneralDataReaction[0].notebook=model.notebook;
  exp.GeneralDataReaction[0].yield= (model.yield==null) ? "0" : model.yield
//  exp.GeneralDataReaction[0].yield=model.yield ;   
  exp.GeneralDataReaction[0].subject=model.title ;  
}

var updated = function(modelValue,form){
  alert("pippo")
} 

<<<<<<< HEAD
=======
var viewAttach = function (att) {
        $('#txtDocName').val(att.DOCUMENT_NAME).css('width', '400px')
        $('#txtDocDesc').val(att.DOCUMENT_DESCRIPTION).css('width', '400px')
        $('#txtDocFile').val(att.ORIGINAL_FILE_NAME).css('width', '600px')
        var fileName = getAttFileName(att.ATTACHEMENT_KEY)[0].ORIGINAL_FILE_NAME;
        var tmp = fileName.split("\\");
        var fn = tmp[tmp.length-1]
        $('#downFile').html('<a href="attachements/' + fn + '">' + fn + '</a>')
    }
>>>>>>> 29674b4b4c7948a9e39f84cd89527e215fc448c9

Array.prototype.keyUcase = function() {
  for(var i = 0; i<this.length;i++) {

      var a = this[i];
      for (var key in a) {
          var temp; 
          if (a.hasOwnProperty(key)) {
            temp = a[key];
            delete a[key];
            a[key.toUpperCase()] = temp;
          }
      }
      this[i] = a;

  }
  return this;
}