* `Trips`

    * `id`: primary key

        * `trip_budget`

        * `traveller_amount`

        * `traveller_id`: non - unique foreign key that references the`Traveller` model's `id` field (`Traveller.id`)

            * `location_id`: non - unique foreign key that references the`Location` model's `id` field (`Location.id`)