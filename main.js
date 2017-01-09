var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleSappeur = require('role.sappeur');
var rolePothole = require('role.pothole');
var roleRunner = require('role.runner');
var structureTower = require('structure.tower');
var roleEngineer = require('role.engineer');



module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    for(var name in Game.rooms) {
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    }
    
    var extensions =   _.filter(Game.structures,  (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION);
                    }
            )
       
    var extensionEnergy = 0 ;
    console.log("how many extensions: ", extensions.length);
    for(var e in extensions){
        console.log("extensions and energy: ", e, "  ",extensions[e].energy );
        extensionEnergy = extensionEnergy + extensions[e].energy
    }
    var buildEnergy = Game.spawns['Spawn1'].energy + extensionEnergy;
    console.log("total energy", buildEnergy)
    
    var sappeurs = _.filter(Game.creeps, (creep) => creep.memory.role == 'sappeur');
        console.log('Sappeurs: ' + sappeurs.length);

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        console.log('Harvesters: ' + harvesters.length);
    
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        console.log('Builders: ' + builders.length);
        
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        console.log('Upgraders: ' + upgraders.length);
        
    var potholes = _.filter(Game.creeps, (creep) => creep.memory.role == 'pothole');
        console.log('Pothole fillers: ' + potholes.length);
        
    var runners = _.filter(Game.creeps, (creep) => creep.memory.role == 'runner');
        console.log('runners: ' + runners.length);
    
    var engineers = _.filter(Game.creeps, (creep) => creep.memory.role == 'engineer');
        console.log('engineers: ' + engineers.length);
    
    
    if(harvesters.length < 2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }
    else if(upgraders.length < 1) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
    }
    else if(300 < buildEnergy && buildEnergy < 350){
        console.log("hit it");
    }
    else if(buildEnergy == 350){
        if(harvesters.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep([ WORK, WORK,CARRY, MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
        }
        
       
        if(builders.length < 3) {
            var newName = Game.spawns['Spawn1'].createCreep([ WORK, WORK,CARRY, MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newName);
        }
        
       
        if(upgraders.length < 3) {
            var newName = Game.spawns['Spawn1'].createCreep([ WORK, WORK,CARRY, MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName);
        }
        
         if(sappeurs.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep([ WORK, WORK,CARRY, MOVE], undefined, {role: 'sappeur'});
        console.log('Spawning new sappeurs: ' + newName);
        }
        
    }
    else if(buildEnergy == 400){
        if(harvesters.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK,CARRY, MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
        }
        
       
        if(builders.length < 3) {
            var newName = Game.spawns['Spawn1'].createCreep([ WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newName);
        }
        
       
        if(upgraders.length < 3) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName);
        }
        
         if(sappeurs.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, CARRY, MOVE], undefined, {role: 'sappeur'});
        console.log('Spawning new sappeurs: ' + newName);
        }
        
    }
    else if(buildEnergy == 450){
        if(harvesters.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, WORK,CARRY, MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
        }
        
       
        if(builders.length < 3) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newName);
        }
        
       
        if(upgraders.length < 3) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName);
        }
        
         if(sappeurs.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, WORK, CARRY, MOVE], undefined, {role: 'sappeur'});
        console.log('Spawning new sappeurs: ' + newName);
        }
        
    }
    else if(buildEnergy == 500){
        if(harvesters.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, WORK,CARRY, MOVE, MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
        }
        
       
        if(builders.length < 3) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newName);
        }
        
       
        if(upgraders.length < 3) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName);
        }
        
         if(sappeurs.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'sappeur'});
        console.log('Spawning new sappeurs: ' + newName);
        }
        
    }
    else if(buildEnergy >= 550){
        if(harvesters.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
        }
        
       
        if(builders.length < 2) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newName);
        }
        
        if(upgraders.length < 2) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName);
        }
        
         if(sappeurs.length < 2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'sappeur'});
        console.log('Spawning new sappeurs: ' + newName);
        }
        
        if(engineers.length < 2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'engineer'});
        console.log('Spawning new engineer: ' + newName);
        }
        
        if(potholes.length < 2) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'pothole'});
            console.log('Spawning new upgrader: ' + newName);
        }
        if(runners.length < 2) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {role: 'runner'});
            console.log('Spawning new upgrader: ' + newName);
        }
    }
    else{
         if(harvesters.length < 2) {
                var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
                console.log('Spawning new harvester: ' + newName);
            }
        
        if(upgraders.length < 1) {
                var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
                console.log('Spawning new upgrader: ' + newName);
            }
        
        if(builders.length < 2) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newName);
        }
    
        if(sappeurs.length < 2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'sappeur'});
        console.log('Spawning new sappeurs: ' + newName);
        }
        
        if(potholes.length < 2) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'pothole'});
            console.log('Spawning new upgrader: ' + newName);
        }
        
    }
    
    var towers =   _.filter(Game.structures,  (structure) => {
                        return (structure.structureType == STRUCTURE_TOWER);
                    }
            )
    
    for(var t in towers){
        structureTower.patrol(towers[t]);
    }
 
   /*
    for(var structure in Game.structures){
        if(Game.getObjectById(structure).structureType == STRUCTURE_TOWER){
            var tower = Game.getObjectById(structure)
            structureTower.patrol(tower);
        }
    }
    */
  
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'sappeur') {
            roleSappeur.run(creep);
        }
        if(creep.memory.role == 'pothole') {
            rolePothole.run(creep);
        }
        if(creep.memory.role == 'runner') {
            roleRunner.run(creep);
        }
        if(creep.memory.role == 'engineer'){
            roleEngineer.run(creep)
        }
    }
}