'use-strict'

let display = document.getElementById("display");
let value = "";
let result = 0;
let state = "start";
let mode = "integer";
let banNumber = "off";

function calculate(){
  result = eval(value);
  return result;
}

$(document).ready(function() {
  
  $(".number").click(function() {
    if(banNumber === "on"){
      return;
    }
    if(state === "finish"){
      value = "";
      result = 0;
    }
    value += this.textContent;
    display.textContent = value;
    state = "numeric";
    });
    
    $(".zero").click(function()　{
      if(banNumber === "on"){
        return;
      }
      if(state !== "numeric"){
        banNumber = "on";
      }
      if(state === "finish"){
        value = "";
        result = 0;
      }
      value += this.textContent;
      display.textContent = value;
      state = "numeric";
    });
    
    $(".zerozero").click(function()　{
      if(banNumber === "on"){
        return;
      }
      if(state !== "numeric"){
        banNumber = "on";
      }
      if(state === "numeric"){
        value += this.textContent;
      }else if(state === "finish"){
        value = "0";
        result = 0;
      }else{
        value += 0;
      }
      display.textContent = value;
      state = "numeric";
    });
    
    $(".operator").click(function() {
        if(state === "start" && (this.textContent === "*" || this.textContent === "/")){
          return;
        }
        if(state === "arithmetic"){
          value = value.slice(0,-1);
        }
        if(state === "finish"){
          value = result;
          result = 0;
        }
        value += this.textContent;
        display.textContent = value;
        state = "arithmetic";
        mode = "integer";
        banNumber = "off";
    });
    
    $(".point").click(function() {
        if(mode === "float"){
          return;
        }
        if(state === "start" || state === "arithmetic"){
          value += "0";
        }
        if(state === "finish"){
          value = "0";
          result = 0;
        }
        value += this.textContent;
        display.textContent = value;
        state = "numeric";
        mode = "float";
        banNumber = "off";
    });
    
    $("#reset").click(function() {
        value = "";
        result = 0;
        display.textContent = "0";
        state = "start";
        mode = "integer";
        banNumber = "off";
    });
    
    $("#equal").click(function() {
        if(state === "start"){
          return;
        }
        if(state === "arithmetic"){
          value = value.slice(0,-1);
        }
        display.textContent = calculate();
        state = "finish";
        mode = "integer";
        banNumber = "off";
    });
});

