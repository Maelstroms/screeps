
var roleRunner = {

    run: function(creep) {
        if (creep.carry.energy == 0) {
            var containers = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER) && structure.store.energy > 0;
                }
            });
            var flagers = creep.room.find(FIND_FLAGS, {
                filter: (flag) => {
                    return (flag.name == "container1" ||
                            flag.name == "Container2");
                }
            });
            if(containers.length > 0) {
                if((flagers[0].pos.isEqualTo(containers[0].pos) || flagers[1].pos.isEqualTo(containers[0].pos)) && 
                    creep.withdraw(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(containers[0]);
                }
            }
            
        }
        else{
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_TOWER ||
                            structure.structureType == STRUCTURE_STORAGE ||
                            structure.structureType == STRUCTURE_CONTAINER) && structure.energy < structure.energyCapacity;
                }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
            
                }
            }
        }
    }  
};

module.exports = roleRunner;