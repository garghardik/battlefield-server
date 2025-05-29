const battlefieldData =
    [
        {
            "type": "gameSpecifics",
            "data": [
                { "label": "PLAYERS", "stat": "60/64" },
                { "label": "PING", "stat": "104ms" },
                { "label": "TICKRATE", "stat": "60 Hz" }

            ]
        },
        {
            "type": "control",
            "data": [
                {
                    "label": "settings",
                    "data": [
                        { "label": "region", "stat": "europe - de" },
                        { "label": "punkbuster", "stat": "on" },
                        { "label": "fairfight", "stat": "on" },
                        { "label": "password", "stat": "off" },
                        { "label": "preset", "stat": "normal" }
                    ]
                },
                {
                    "label": "advanced",
                    "data": [
                        { "label": "minimap", "stat": "on" },
                        { "label": "only squad leader spawn", "stat": "off" },
                        { "label": "vehicles", "stat": "on" },
                        { "label": "team balance", "stat": "on" },
                        { "label": "minimap spotting", "stat": "on" },
                        { "label": "hud", "stat": "on" },
                        { "label": "3p vehicle cam", "stat": "on" },
                        { "label": "regenerative health", "stat": "on" },
                        { "label": "kill cam", "stat": "on" },
                        { "label": "friendly fire", "stat": "off" },
                        { "label": "3d spotting", "stat": "on" },
                        { "label": "enemy name tags", "stat": "on" }
                    ]
                },
                {
                    "label": "rules",
                    "data": [
                        { "label": "tickets", "stat": "400" },
                        { "label": "vehicle spawn delay", "stat": "25" },
                        { "label": "bullet damage", "stat": "100" },
                        { "label": "kick after team kills", "stat": "5" },
                        { "label": "player health", "stat": "100" },
                        { "label": "player respawn time", "stat": "100" },
                        { "label": "kick after idle", "stat": "300" },
                        { "label": "ban after kicks", "stat": "3" },
                    ]
                }
            ]
        }

    ]

module.exports = {battlefieldData}