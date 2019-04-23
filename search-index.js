var N=null,E="",T="t",U="u",searchIndex={};
var R=["getopts","options","string","option","result","try_from","borrow","type_id","typeid","borrow_mut","try_into","to_owned","clone_into","parsingstyle","matches","formatter","ParsingStyle"];

searchIndex[R[0]]={"doc":"Simple getopt alternative.","i":[[3,"Options",R[0],"A description of the options that a program can handle.",N,N],[3,"Matches",E,"The result of checking command line arguments. Contains a…",N,N],[12,"free",E,"Free string fragments",0,N],[4,R[16],E,"What parsing style to use when parsing arguments.",N,N],[13,"FloatingFrees",E,"Flags and \"free\" arguments can be freely inter-mixed.",1,N],[13,"StopAtFirstFree",E,"As soon as a \"free\" argument (i.e. non-flag) is…",1,N],[4,"HasArg",E,"Describes whether an option has an argument.",N,N],[13,"Yes",E,"The option requires an argument.",2,N],[13,"No",E,"The option takes no argument.",2,N],[13,"Maybe",E,"The option argument is optional.",2,N],[4,"Occur",E,"Describes how often an option may occur.",N,N],[13,"Req",E,"The option occurs once.",3,N],[13,"Optional",E,"The option occurs at most once.",3,N],[13,"Multi",E,"The option occurs zero or more times.",3,N],[4,"Fail",E,"The type returned when the command line does not conform…",N,N],[13,"ArgumentMissing",E,"The option requires an argument but none was passed.",4,N],[13,"UnrecognizedOption",E,"The passed option is not declared among the possible…",4,N],[13,"OptionMissing",E,"A required option is not present.",4,N],[13,"OptionDuplicated",E,"A single occurrence option is being used multiple times.",4,N],[13,"UnexpectedArgument",E,"There's an argument being passed to a non-argument option.",4,N],[6,"Result",E,"The result of parsing a command line with a set of options.",N,N],[11,"new",E,"Create a blank set of options.",5,[[],[R[1]]]],[11,"parsing_style",E,"Set the parsing style.",5,[[["self"],[R[13]]],[R[1]]]],[11,"long_only",E,"Set or clear \"long options only\" mode.",5,[[["self"],["bool"]],[R[1]]]],[11,"opt",E,"Create a generic option group, stating all parameters…",5,[[["str"],["self"],["hasarg"],["occur"]],[R[1]]]],[11,"optflag",E,"Create a long option that is optional and does not take an…",5,[[["str"],["self"]],[R[1]]]],[11,"optflagmulti",E,"Create a long option that can occur more than once and…",5,[[["str"],["self"]],[R[1]]]],[11,"optflagopt",E,"Create a long option that is optional and takes an…",5,[[["str"],["self"]],[R[1]]]],[11,"optmulti",E,"Create a long option that is optional, takes an argument,…",5,[[["str"],["self"]],[R[1]]]],[11,"optopt",E,"Create a long option that is optional and takes an argument.",5,[[["str"],["self"]],[R[1]]]],[11,"reqopt",E,"Create a long option that is required and takes an argument.",5,[[["str"],["self"]],[R[1]]]],[11,"parse",E,"Parse command line arguments according to the provided…",5,[[["intoiterator"],["self"]],[R[4]]]],[11,"short_usage",E,"Derive a short one-line usage summary from a set of long…",5,[[["str"],["self"]],[R[2]]]],[11,"usage",E,"Derive a formatted message from a set of options.",5,[[["str"],["self"]],[R[2]]]],[11,"usage_with_format",E,"Derive a custom formatted message from a set of options.…",5,[[["self"],["fnmut"]],[R[2]]]],[11,"opt_defined",E,"Returns true if an option was defined",0,[[["str"],["self"]],["bool"]]],[11,"opt_present",E,"Returns true if an option was matched.",0,[[["str"],["self"]],["bool"]]],[11,"opt_count",E,"Returns the number of times an option was matched.",0,[[["str"],["self"]],["usize"]]],[11,"opts_present",E,"Returns true if any of several options were matched.",0,[[["self"]],["bool"]]],[11,"opts_str",E,"Returns the string argument supplied to one of several…",0,[[["self"]],[[R[2]],[R[3],[R[2]]]]]],[11,"opt_strs",E,"Returns a vector of the arguments provided to all matches…",0,[[["str"],["self"]],[[R[2]],["vec",[R[2]]]]]],[11,"opt_str",E,"Returns the string argument supplied to a matching option…",0,[[["str"],["self"]],[[R[2]],[R[3],[R[2]]]]]],[11,"opt_default",E,"Returns the matching string, a default, or `None`.",0,[[["str"],["self"]],[[R[2]],[R[3],[R[2]]]]]],[11,"opt_get",E,"Returns some matching value or `None`.",0,[[["str"],["self"]],[[R[3]],[R[4],[R[3]]]]]],[11,"opt_get_default",E,"Returns a matching value or default.",0,[[["str"],["self"],[T]],[R[4]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[5],E,E,5,[[[U]],[R[4]]]],[11,R[6],E,E,5,[[["self"]],[T]]],[11,R[7],E,E,5,[[["self"]],[R[8]]]],[11,R[9],E,E,5,[[["self"]],[T]]],[11,R[10],E,E,5,[[],[R[4]]]],[11,R[11],E,E,0,[[["self"]],[T]]],[11,R[12],E,E,0,[[[T],["self"]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[5],E,E,0,[[[U]],[R[4]]]],[11,R[6],E,E,0,[[["self"]],[T]]],[11,R[7],E,E,0,[[["self"]],[R[8]]]],[11,R[9],E,E,0,[[["self"]],[T]]],[11,R[10],E,E,0,[[],[R[4]]]],[11,R[11],E,E,1,[[["self"]],[T]]],[11,R[12],E,E,1,[[[T],["self"]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[5],E,E,1,[[[U]],[R[4]]]],[11,R[6],E,E,1,[[["self"]],[T]]],[11,R[7],E,E,1,[[["self"]],[R[8]]]],[11,R[9],E,E,1,[[["self"]],[T]]],[11,R[10],E,E,1,[[],[R[4]]]],[11,R[11],E,E,2,[[["self"]],[T]]],[11,R[12],E,E,2,[[[T],["self"]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[5],E,E,2,[[[U]],[R[4]]]],[11,R[6],E,E,2,[[["self"]],[T]]],[11,R[7],E,E,2,[[["self"]],[R[8]]]],[11,R[9],E,E,2,[[["self"]],[T]]],[11,R[10],E,E,2,[[],[R[4]]]],[11,R[11],E,E,3,[[["self"]],[T]]],[11,R[12],E,E,3,[[[T],["self"]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[5],E,E,3,[[[U]],[R[4]]]],[11,R[6],E,E,3,[[["self"]],[T]]],[11,R[7],E,E,3,[[["self"]],[R[8]]]],[11,R[9],E,E,3,[[["self"]],[T]]],[11,R[10],E,E,3,[[],[R[4]]]],[11,R[11],E,E,4,[[["self"]],[T]]],[11,R[12],E,E,4,[[[T],["self"]]]],[11,"to_string",E,E,4,[[["self"]],[R[2]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[5],E,E,4,[[[U]],[R[4]]]],[11,R[6],E,E,4,[[["self"]],[T]]],[11,R[7],E,E,4,[[["self"]],[R[8]]]],[11,R[9],E,E,4,[[["self"]],[T]]],[11,R[10],E,E,4,[[],[R[4]]]],[11,"eq",E,E,1,[[[R[13]],["self"]],["bool"]]],[11,"eq",E,E,2,[[["hasarg"],["self"]],["bool"]]],[11,"eq",E,E,3,[[["self"],["occur"]],["bool"]]],[11,"eq",E,E,0,[[["self"],[R[14]]],["bool"]]],[11,"ne",E,E,0,[[["self"],[R[14]]],["bool"]]],[11,"eq",E,E,4,[[["fail"],["self"]],["bool"]]],[11,"ne",E,E,4,[[["fail"],["self"]],["bool"]]],[11,"default",E,E,5,[[],["self"]]],[11,"clone",E,E,1,[[["self"]],[R[13]]]],[11,"clone",E,E,2,[[["self"]],["hasarg"]]],[11,"clone",E,E,3,[[["self"]],["occur"]]],[11,"clone",E,E,0,[[["self"]],[R[14]]]],[11,"clone",E,E,4,[[["self"]],["fail"]]],[11,"fmt",E,E,4,[[[R[15]],["self"]],[R[4]]]],[11,"fmt",E,E,2,[[[R[15]],["self"]],[R[4]]]],[11,"fmt",E,E,3,[[[R[15]],["self"]],[R[4]]]],[11,"fmt",E,E,0,[[[R[15]],["self"]],[R[4]]]],[11,"fmt",E,E,4,[[[R[15]],["self"]],[R[4]]]],[11,"description",E,E,4,[[["self"]],["str"]]]],"p":[[3,"Matches"],[4,R[16]],[4,"HasArg"],[4,"Occur"],[4,"Fail"],[3,"Options"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);