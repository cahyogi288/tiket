<template>
	<v-card>
		<v-navigation-drawer
		v-model="primaryDrawer.model"
		:clipped="primaryDrawer.clipped"
		:floating="primaryDrawer.floating"
		:mini-variant="primaryDrawer.mini"
		:permanent="primaryDrawer.type === 'permanent'"
		:temporary="primaryDrawer.type === 'temporary'"
		app
		overflow>
			<v-list dense>

      <!-- prepend-icon="mdi-account" -->
      <v-list-group
        v-for="item in listSidebar"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="md-body-1" v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          router
          :to="subItem.link"
        >
          <v-list-item-content>
            <v-list-item-title class="md-body-1" v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      	<template v-slot:activator>
          <v-list-item-title class="md-body-1">{{ list.title }}</v-list-item-title>
        </template>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar
		:clipped-left="primaryDrawer.clipped"
		app>
			<v-app-bar-nav-icon
			v-if="primaryDrawer.type !== 'permanent'"
			@click.stop="primaryDrawer.model = !primaryDrawer.model"
			></v-app-bar-nav-icon>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="title">
					Tiket
					</v-list-item-title>
					<v-list-item-subtitle>
					Application
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-spacer></v-spacer>
			<v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            @click.stop="primaryDrawer.model2 = !primaryDrawer.model2"
          >
            <v-icon>mdi-cog-outline</v-icon>
          </v-btn>
        </template>

        <!-- <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list> -->
      </v-menu>
		</v-app-bar>
	</v-card>
</template>

<script>
export default {

  data: () => ({
    drawers: ['Default (no property)', 'Permanent', 'Temporary'],
    primaryDrawer: {
      model: null,
      model2: false,
      type: 'default (no property)',
      clipped: true,
      floating: false,
      mini: false
    },
    footer: {
      inset: false
    },

    items: [
          { title: 'Home', icon: 'mdi-home', link: '/'},
          // { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/' },
          // { title: 'Sertifikat', icon: 'mdi-account', link: '/sertifikat'},
          { title: 'Pengawas', icon: 'mdi-help-box', link: '/pengawas' },
        ],
    listSidebar: [
    	{
        action: 'mdi-file-document',
        title: 'Navigation',
        active: true,
        items: [
          { title: 'Tiket', link: '/listTiket' },
          { title: 'Add Tiket', link: '/addTiket'},

          ],
        },
      ],
     cruds: [
        ['Create', 'mdi-add'],
        ['Read', 'mdi-insert_drive_file'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
  })
}
</script>
