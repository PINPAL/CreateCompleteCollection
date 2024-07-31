const decals = [
	"create_things_and_misc:train_sing",
	"create_things_and_misc:train_sing_2",
	"create_things_and_misc:train_sing_3",
	"create_things_and_misc:train_sing_4",
	"create_things_and_misc:train_sing_5",
	"create_things_and_misc:train_sing_yellow_1",
	"create_things_and_misc:train_sing_yellow_2",
	"create_things_and_misc:train_sing_yellow_3",
	"create_things_and_misc:train_sing_yellow_4",
	"create_things_and_misc:train_sing_yellow_5",
	"create_things_and_misc:redsing",
	"create_things_and_misc:redsing_1",
	"create_things_and_misc:redsing_2",
	"create_things_and_misc:green_sing",
	"create_things_and_misc:green_sing_1",
	"create_things_and_misc:green_sing_2",
	"create_things_and_misc:green_sing_3",
	"create_things_and_misc:green_sing_4",
	"create_things_and_misc:green_sing_5",
	"create_things_and_misc:green_sing_6",
	"create_things_and_misc:speed_25",
	"create_things_and_misc:speed_50",
	"create_things_and_misc:speed_75",
	"create_things_and_misc:speed_100",

	"createdeco:decal_warning",
	"createdeco:decal_creeper",
	"createdeco:decal_skull",
	"createdeco:decal_flow",
	"createdeco:decal_ice",
	"createdeco:decal_radioactive",
	"createdeco:decal_top_left",
	"createdeco:decal_up",
	"createdeco:decal_top_right",
	"createdeco:decal_left",
	"createdeco:decal_cross",
	"createdeco:decal_right",
	"createdeco:decal_down_left",
	"createdeco:decal_down",
	"createdeco:decal_down_right",
	"createdeco:decal_fluid",
	"createdeco:decal_fire",
	"createdeco:decal_electrical",
	"createdeco:decal_fire_diamond",
	"createdeco:decal_no_entry",

	"design_decor:moyai_sign",
	"design_decor:warning_sign",
	"design_decor:arrow_up_sign",
	"design_decor:tap_sign",
	"design_decor:stop_sign",
	"design_decor:arrow_right_sign",
	"design_decor:arrow_left_sign",
	"design_decor:glitch_warning_sign",
	"design_decor:broken_wrench_sign",
	"design_decor:biohazard_sign",
	"design_decor:capitalism_warning_sign",
	"design_decor:arrow_down_sign",
	"design_decor:gear_sign",
	"design_decor:creeper_sign",
	"design_decor:bun_sign",
	"design_decor:silly_sign",
	"design_decor:american_sign",
	"design_decor:magnet_sign",
	"design_decor:blank_sign",
	"design_decor:a_sign",
	"design_decor:b_sign",
	"design_decor:c_sign",
	"design_decor:d_sign",
	"design_decor:e_sign",
	"design_decor:f_sign",
	"design_decor:g_sign",
	"design_decor:h_sign",
	"design_decor:i_sign",
	"design_decor:j_sign",
	"design_decor:k_sign",
	"design_decor:l_sign",
	"design_decor:m_sign",
	"design_decor:n_sign",
	"design_decor:o_sign",
	"design_decor:p_sign",
	"design_decor:q_sign",
	"design_decor:r_sign",
	"design_decor:s_sign",
	"design_decor:t_sign",
	"design_decor:u_sign",
	"design_decor:v_sign",
	"design_decor:w_sign",
	"design_decor:x_sign",
	"design_decor:y_sign",
	"design_decor:z_sign",
	"design_decor:0_sign",
	"design_decor:1_sign",
	"design_decor:2_sign",
	"design_decor:3_sign",
	"design_decor:4_sign",
	"design_decor:5_sign",
	"design_decor:6_sign",
	"design_decor:7_sign",
	"design_decor:8_sign",
	"design_decor:9_sign",
	"design_decor:letter_sign",
];

ServerEvents.recipes((event) => {
	decals.forEach((decal) => {
		event.remove({ output: decal });

		event.stonecutting(decal, "#forge:nuggets/zinc").id("create_cc:" + decal.replace(":", "_"));
		event.stonecutting(decal, "#create_cc:create_decals");
	});
});

ServerEvents.tags("item", (event) => {
	decals.forEach((decal) => {
		event.add("create_cc:create_decals", decal);
	});
});
