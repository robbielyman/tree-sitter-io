(identifier) @variable
(string) @string
(operator) @operator
(number) @number
(comment) @comment

((identifier) @function.builtin
              (#any-of? @function.builtin 
               "actorProcessQueue"
               "actorRun"
               "addTrait"
               "ancestorWithSlot" 
               "ancestors"        
               "and"              
               "appendProto"      
               "apropos"          
               "argIsActivationRecord"
               "argIsCall"        
               "asBoolean"        
               "asSimpleString"   
               "asString"         
               "asyncSend"        
               "become"           
               "block"            
               "break"            
               "clone"            
               "cloneWithoutInit" 
               "compare"          
               "contextWithSlot"  
               "continue"         
               "coroDo"           
               "coroDoLater"      
               "coroFor"          
               "coroWith"         
               "currentCoro"      
               "deprecatedWarning"
               "do"               
               "doFile"           
               "doMessage"        
               "doRelativeFile"   
               "doString"         
               "evalArg"          
               "evalArgAndReturnNil"
               "evalArgAndReturnSelf"
               "for"              
               "foreachSlot"      
               "futureSend"       
               "getLocalSlot"     
               "getSlot"          
               "handleActorException"
               "hasDirtySlot"     
               "hasLocalSlot"     
               "hasProto"         
               "hasSlot"          
               "if"               
               "ifError"          
               "ifNil"            
               "ifNilEval"        
               "ifNonNil"         
               "ifNonNilEval"     
               "in"               
               "init"             
               "inlineMethod"     
               "isActivatable"    
               "isError"          
               "isIdenticalTo"    
               "isKindOf"         
               "isLaunchScript"   
               "isNil"            
               "isTrue"           
               "justSerialized"   
               "launchFile"       
               "lazySlot"         
               "lexicalDo"        
               "list"             
               "loop"             
               "markClean"        
               "memorySize"       
               "message"          
               "method"           
               "newSlot"          
               "not"              
               "or"               
               "ownsSlots"        
               "pause"            
               "perform"          
               "performWithArgList"
               "prependProto"     
               "print"            
               "println"          
               "proto"            
               "protos"           
               "raiseIfError"     
               "relativeDoFile"   
               "removeAllProtos"  
               "removeAllSlots"   
               "removeProto"      
               "removeSlot"       
               "resend"           
               "return"           
               "returnIfError"    
               "returnIfNonNil"   
               "serialized"       
               "serializedSlots"  
               "serializedSlotsWithNames"
               "setIsActivatable" 
               "setProto"         
               "setProtos"        
               "setSlot"          
               "setSlotWithType"  
               "shallowCopy"      
               "slotDescriptionMap"
               "slotNames"        
               "slotSummary"      
               "slotValues"       
               "stopStatus"       
               "super"            
               "switch"           
               "thisContext"      
               "thisLocalContext" 
               "thisMessage"      
               "try"              
               "type"             
               "uniqueHexId"      
               "uniqueId"         
               "updateSlot"       
               "wait"             
               "while"            
               "write"            
               "writeln"          
               "yield"
               "call"
               "argAt"
               "addOperator"
               "args"))      

((identifier) @keyword.builtin
              (#any-of? @keyword.builtin
               "Object"
               "System"
               "Lobby"
               "_"
               "Proto"
               "message"
               "sender"
               "activated"
               "slotContext"
               "target"
               "OperatorTable"))