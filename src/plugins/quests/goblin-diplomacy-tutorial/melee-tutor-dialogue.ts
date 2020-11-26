import { Player } from '@server/world/actor/player/player';
import { Npc } from '@server/world/actor/npc/npc';
import { dialogue, Emote, execute } from '@server/world/actor/dialogue';


export const harlanDialogueHandler: { [key: number]: (player: Player, npc: Npc) => void } = {
    50: async (player, npc) => {
        await dialogue([ player, { npc, key: 'harlan' } ], [
            harlan => [ Emote.GENERIC, `Greetings, adventurer. How can I assist you?` ],
            player => [ Emote.WONDERING, `The guide in there said you could unlock my inventory and stuff.` ],
            harlan => [ Emote.LAUGH, `I suppose I could, yes. But where's the fun in that?` ],
            player => [ Emote.SAD, `I just want to fight something.` ],
            harlan => [ Emote.GENERIC, `I'm sure you'll get the chance, what with all the recent goblin attacks on this side of the River Lum.` ],
            harlan => [ Emote.GENERIC, `To that end, let me show you your inventory.` ],
            execute(() => {
                player.savedMetadata.tutorialProgress = 55;
            })
        ]);
    },
    55: async (player, npc) => {
        await dialogue([ player, { npc, key: 'harlan' } ], [
            harlan => [ Emote.GENERIC, `Speak with me once you've opened your inventory.` ]
        ]);
    },
    60: async (player, npc) => {
        await dialogue([ player, { npc, key: 'harlan' } ], [
            player => [ Emote.SAD, `Doesn't look like I had much on me...` ],
            harlan => [ Emote.GENERIC, `I would say the goblins likely ran through your pockets before the Guard hauled you in.` ],
            harlan => [ Emote.GENERIC, `Lets check out your hitpoints and make sure you're in proper shape after that.` ],
            execute(() => {
                player.savedMetadata.tutorialProgress = 65;
            })
        ]);
    },
    65: async (player, npc) => {
        await dialogue([ player, { npc, key: 'harlan' } ], [
            harlan => [ Emote.GENERIC, `Click on your skills tab to view your hitpoints stat. It should be blinking over near your inventory.` ]
        ]);
    },
    70: async (player, npc) => {
        await dialogue([ player, { npc, key: 'harlan' } ], [
            harlan => [ Emote.GENERIC, `You appear to be in good shape. Though with a backpack like that, ` +
            `I don't think you'll make much headway against those goblins...` ],
            harlan => [ Emote.GENERIC, `I'll provide you with some starter equipment - but from there, you're on your own.` ],
            harlan => [ Emote.GENERIC, `But before I can do that, you'll need to open your Equipment tab.` ],
            execute(() => {
                player.savedMetadata.tutorialProgress = 75;
            })
        ]);
    },
    75: async (player, npc) => {
        await dialogue([ player, { npc, key: 'harlan' } ], [
            harlan => [ Emote.GENERIC, `Speak with me once you've opened your equipment.` ]
        ]);
    },
    80: async (player, npc) => {
        await dialogue([ player, { npc, key: 'harlan' } ], [
            harlan => [ Emote.GENERIC, `` ]
        ]);
    }
};
