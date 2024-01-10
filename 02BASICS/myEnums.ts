// Enums: Enumerations => Meaning: Specifically Listed

// Enums are used to give restrictions in choice
// When Enum used one has to choose between only the selected types
// It is like object just the equal(=) sign is not used => That's a synta difference with objects ({})
// When assigned STRING value is assigned the value below it has to be assigned with some value
// WhereAs if a NUMBER value is assigned than a value assigned criteria is not mandatory in Enum(since it automatically assigns than)
// When number are assigned it assignes whatever value are below it by itself based on an ascending order

const enum seatChoice {
    AISLE = "AISLE",
    MIDDLE = 2,
    WINDOW = "",
    FOURTH = "FOUR"
}

const seat = seatChoice.AISLE;