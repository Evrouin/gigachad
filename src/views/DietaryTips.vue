<template>
    <v-dialog v-model="dialog" fullscreen persistent>
        <v-toolbar color="grey darken-4" dark>
            Dietary Tips
            <v-spacer></v-spacer>
            <v-btn icon dark :to="{ path: '/home' }"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
        <v-card class="pa-10">
            <v-card-text>
                <br />
                <h4>Calories in Common Foods</h4>
                <table class="cinfoT">
                    <tr>
                        <td class="cinfoHd">Food</td>
                        <td class="cinfoHdL">Serving Size</td>
                        <td class="cinfoHdL">Calories</td>
                        <td class="cinfoHdL">kJ</td>
                    </tr>
                    <tr>
                        <td colspan="4"><b>Fruit</b></td>
                    </tr>
                    <tr>
                        <td>Apple</td>
                        <td>1 (4 oz.)</td>
                        <td>59</td>
                        <td>247</td>
                    </tr>
                    <tr>
                        <td>Banana</td>
                        <td>1 (6 oz.)</td>
                        <td>151</td>
                        <td>632</td>
                    </tr>
                    <tr>
                        <td>Grapes</td>
                        <td>1 cup</td>
                        <td>100</td>
                        <td>419</td>
                    </tr>
                    <tr>
                        <td>Orange</td>
                        <td>1 (4 oz.)</td>
                        <td>53</td>
                        <td>222</td>
                    </tr>
                    <tr>
                        <td>Pear</td>
                        <td>1 (5 oz.)</td>
                        <td>82</td>
                        <td>343</td>
                    </tr>
                    <tr>
                        <td>Peach</td>
                        <td>1 (6 oz.)</td>
                        <td>67</td>
                        <td>281</td>
                    </tr>
                    <tr>
                        <td>Pineapple</td>
                        <td>1 cup</td>
                        <td>82</td>
                        <td>343</td>
                    </tr>
                    <tr>
                        <td>Strawberry</td>
                        <td>1 cup</td>
                        <td>53</td>
                        <td>222</td>
                    </tr>
                    <tr>
                        <td>Watermelon</td>
                        <td>1 cup</td>
                        <td>50</td>
                        <td>209</td>
                    </tr>

                    <tr>
                        <td colspan="4"><b>Vegetables</b></td>
                    </tr>
                    <tr>
                        <td>Asparagus</td>
                        <td>1 cup</td>
                        <td>27</td>
                        <td>113</td>
                    </tr>
                    <tr>
                        <td>Broccoli</td>
                        <td>1 cup</td>
                        <td>45</td>
                        <td>188</td>
                    </tr>
                    <tr>
                        <td>Carrots</td>
                        <td>1 cup</td>
                        <td>50</td>
                        <td>209</td>
                    </tr>
                    <tr>
                        <td>Cucumber</td>
                        <td>4 oz.</td>
                        <td>17</td>
                        <td>71</td>
                    </tr>
                    <tr>
                        <td>Eggplant</td>
                        <td>1 cup</td>
                        <td>35</td>
                        <td>147</td>
                    </tr>
                    <tr>
                        <td>Lettuce</td>
                        <td>1 cup</td>
                        <td>5</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>Tomato</td>
                        <td>1 cup</td>
                        <td>22</td>
                        <td>92</td>
                    </tr>

                    <tr>
                        <td colspan="4"><b>Proteins</b></td>
                    </tr>
                    <tr>
                        <td>Beef, regular, cooked</td>
                        <td>2 oz.</td>
                        <td>142</td>
                        <td>595</td>
                    </tr>
                    <tr>
                        <td>Chicken, cooked</td>
                        <td>2 oz.</td>
                        <td>136</td>
                        <td>569</td>
                    </tr>
                    <tr>
                        <td>Tofu</td>
                        <td>4 oz.</td>
                        <td>86</td>
                        <td>360</td>
                    </tr>
                    <tr>
                        <td>Egg</td>
                        <td>1 large</td>
                        <td>78</td>
                        <td>327</td>
                    </tr>
                    <tr>
                        <td>Fish, Catfish, cooked</td>
                        <td>2 oz.</td>
                        <td>136</td>
                        <td>569</td>
                    </tr>
                    <tr>
                        <td>Pork, cooked</td>
                        <td>2 oz.</td>
                        <td>137</td>
                        <td>574</td>
                    </tr>
                    <tr>
                        <td>Shrimp, cooked</td>
                        <td>2 oz.</td>
                        <td>56</td>
                        <td>234</td>
                    </tr>

                    <tr>
                        <td colspan="4"><b>Common Meals/Snacks</b></td>
                    </tr>
                    <tr>
                        <td>Bread, white</td>
                        <td>1 slice (1 oz.)</td>
                        <td>75</td>
                        <td>314</td>
                    </tr>
                    <tr>
                        <td>Butter</td>
                        <td>1 tablespoon</td>
                        <td>102</td>
                        <td>427</td>
                    </tr>
                    <tr>
                        <td>Caesar salad</td>
                        <td>3 cups</td>
                        <td>481</td>
                        <td>2014</td>
                    </tr>
                    <tr>
                        <td>Cheeseburger</td>
                        <td>1 sandwich</td>
                        <td>285</td>
                        <td>1193</td>
                    </tr>
                    <tr>
                        <td>Hamburger</td>
                        <td>1 sandwich</td>
                        <td>250</td>
                        <td>1047</td>
                    </tr>
                    <tr>
                        <td>Dark Chocolate</td>
                        <td>1 oz.</td>
                        <td>155</td>
                        <td>649</td>
                    </tr>
                    <tr>
                        <td>Corn</td>
                        <td>1 cup</td>
                        <td>132</td>
                        <td>553</td>
                    </tr>
                    <tr>
                        <td>Pizza</td>
                        <td>1 slice (14")</td>
                        <td>285</td>
                        <td>1193</td>
                    </tr>
                    <tr>
                        <td>Potato</td>
                        <td>6 oz.</td>
                        <td>130</td>
                        <td>544</td>
                    </tr>
                    <tr>
                        <td>Rice</td>
                        <td>1 cup cooked</td>
                        <td>206</td>
                        <td>862</td>
                    </tr>
                    <tr>
                        <td>Sandwich</td>
                        <td>1 (6" Subway Turkey Sandwich)</td>
                        <td>200</td>
                        <td>837</td>
                    </tr>

                    <tr>
                        <td colspan="4"><b>Beverages/Dairy</b></td>
                    </tr>
                    <tr>
                        <td>Beer</td>
                        <td>1 can</td>
                        <td>154</td>
                        <td>645</td>
                    </tr>
                    <tr>
                        <td>Coca-Cola Classic</td>
                        <td>1 can</td>
                        <td>150</td>
                        <td>628</td>
                    </tr>
                    <tr>
                        <td>Diet Coke</td>
                        <td>1 can</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Milk (1%)</td>
                        <td>1 cup</td>
                        <td>102</td>
                        <td>427</td>
                    </tr>
                    <tr>
                        <td>Milk (2%)</td>
                        <td>1 cup</td>
                        <td>122</td>
                        <td>511</td>
                    </tr>
                    <tr>
                        <td>Milk (Whole)</td>
                        <td>1 cup</td>
                        <td>146</td>
                        <td>611</td>
                    </tr>
                    <tr>
                        <td>Orange Juice</td>
                        <td>1 cup</td>
                        <td>111</td>
                        <td>465</td>
                    </tr>
                    <tr>
                        <td>Apple cider</td>
                        <td>1 cup</td>
                        <td>117</td>
                        <td>490</td>
                    </tr>
                    <tr>
                        <td>Yogurt (low-fat)</td>
                        <td>1 cup</td>
                        <td>154</td>
                        <td>645</td>
                    </tr>
                    <tr>
                        <td>Yogurt (non-fat)</td>
                        <td>1 cup</td>
                        <td>110</td>
                        <td>461</td>
                    </tr>
                </table>
                <br />
                <h4>2000, 1500, and 1200 Calorie Sample Meal Plans</h4>
                <table class="cinfoT" style="width: 100%; border: 1px solid;">
                    <tr>
                        <td class="cinfoHd">Meal</td>
                        <td class="cinfoHdL">1200 Cal Plan</td>
                        <td class="cinfoHdL">1500 Cal Plan</td>
                        <td class="cinfoHdL">2000 Cal Plan</td>
                    </tr>

                    <tr>
                        <td valign="top">Breakfast</td>
                        <td valign="top">
                            All-bran cereal (125)<br />
                            Milk (50)<br />
                            Banana (90)<br />
                        </td>
                        <td valign="top">
                            Granola (120)<br />
                            Greek yogurt (120)<br />
                            Blueberries (40)<br />
                        </td>
                        <td valign="top">
                            Buttered toast (150)<br />
                            Egg (80)<br />
                            Banana (90)<br />
                            Almonds (170)<br />
                        </td>
                    </tr>
                    <tr>
                        <td valign="top">Snack</td>
                        <td valign="top">
                            Cucumber (30)<br />
                            Avocado dip (50)<br />
                        </td>
                        <td valign="top">Orange (70)<br /></td>
                        <td valign="top">
                            Greek yogurt (120)<br />
                            Blueberries (40)<br />
                        </td>
                    </tr>
                    <tr>
                        <td valign="top">Total</td>
                        <td valign="top">345 Calories</td>
                        <td valign="top">350 Calories</td>
                        <td valign="top">650 Calories</td>
                    </tr>
                    <tr>
                        <td colspan="4">&nbsp;</td>
                    </tr>

                    <tr>
                        <td valign="top">Lunch</td>
                        <td valign="top">
                            Grilled cheese with tomato (300)<br />
                            Salad (50)<br />
                        </td>
                        <td valign="top">
                            Chicken and vegetable soup (300)<br />
                            Bread (100)<br />
                        </td>
                        <td valign="top">
                            Grilled chicken (225)<br />
                            Grilled vegetables (125)<br />
                            Pasta (185)<br />
                        </td>
                    </tr>
                    <tr>
                        <td valign="top">Snack</td>
                        <td valign="top">Walnuts (100)<br /></td>
                        <td valign="top">
                            Apple (75)<br />
                            Peanut butter (75)<br />
                        </td>
                        <td valign="top">
                            Hummus (50)<br />
                            Baby carrots (35)<br />
                            Crackers (65)<br />
                        </td>
                    </tr>
                    <tr>
                        <td valign="top">Total</td>
                        <td valign="top">450 Calories</td>
                        <td valign="top">550 Calories</td>
                        <td valign="top">685 Calories</td>
                    </tr>
                    <tr>
                        <td colspan="4">&nbsp;</td>
                    </tr>

                    <tr>
                        <td valign="top">Dinner</td>
                        <td valign="top">
                            Grilled Chicken (200)<br />
                            Brussel sprouts (100)<br />
                            Quinoa (105)<br />
                        </td>
                        <td valign="top">
                            Steak (375)<br />
                            Mashed potatoes (150)<br />
                            Asparagus (75)<br />
                        </td>
                        <td valign="top">
                            Grilled salmon (225)<br />
                            Brown rice (175)<br />
                            Green beans (100)<br />
                            Walnuts (165)<br />
                        </td>
                    </tr>
                    <tr>
                        <td valign="top">Total</td>
                        <td valign="top">405 Calories</td>
                        <td valign="top">600 Calories</td>
                        <td valign="top">665 Calories</td>
                    </tr>
                </table>
                <br />
                <h4>Energy from Common Food Components</h4>
                <table class="cinfoT" style="width: 100%; border: 1px solid;">
                    <tr valign="top">
                        <td class="cinfoHd">Food Components</td>
                        <td class="cinfoHdL">kJ per gram</td>
                        <td class="cinfoHdL">Calorie (kcal) per gram</td>
                        <td class="cinfoHdL">kJ per ounce</td>
                        <td class="cinfoHdL">Calorie (kcal) per ounce</td>
                    </tr>
                    <tr>
                        <td>Fat</td>
                        <td class="cinfoBodL">37</td>
                        <td class="cinfoBodL">8.8</td>
                        <td class="cinfoBodL">1,049</td>
                        <td class="cinfoBodL">249</td>
                    </tr>
                    <tr>
                        <td>Proteins</td>
                        <td class="cinfoBodL">17</td>
                        <td class="cinfoBodL">4.1</td>
                        <td class="cinfoBodL">482</td>
                        <td class="cinfoBodL">116</td>
                    </tr>

                    <tr>
                        <td>Carbohydrates</td>
                        <td class="cinfoBodL">17</td>
                        <td class="cinfoBodL">4.1</td>
                        <td class="cinfoBodL">482</td>
                        <td class="cinfoBodL">116</td>
                    </tr>
                    <tr>
                        <td>Fiber</td>
                        <td class="cinfoBodL">8</td>
                        <td class="cinfoBodL">1.9</td>
                        <td class="cinfoBodL">227</td>
                        <td class="cinfoBodL">54</td>
                    </tr>

                    <tr>
                        <td>Ethanol (drinking alcohol)</td>
                        <td class="cinfoBodL">29</td>
                        <td class="cinfoBodL">6.9</td>
                        <td class="cinfoBodL">822</td>
                        <td class="cinfoBodL">196</td>
                    </tr>
                    <tr>
                        <td>Organic acids</td>
                        <td class="cinfoBodL">13</td>
                        <td class="cinfoBodL">3.1</td>
                        <td class="cinfoBodL">369</td>
                        <td class="cinfoBodL">88</td>
                    </tr>
                    <tr>
                        <td>Polyols (sugar alcohols, sweeteners)</td>
                        <td class="cinfoBodL">10</td>
                        <td class="cinfoBodL">2.4</td>
                        <td class="cinfoBodL">283</td>
                        <td class="cinfoBodL">68</td>
                    </tr>
                </table>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-2" small dark text :to="{ path: '/home' }">
                    I understand
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "DietaryTips",
        created() {
            this.dialog = true;
        },
        data() {
            return {
                dialog: false,
            };
        },
    };
</script>

<style scoped>
    table,
    th,
    td {
        border: 1px solid;
    }

    th,
    td {
        padding: 2px;
    }
    table {
        border-collapse: collapse;
        width: 100%;
    }
</style>
