import { expect } from 'chai';
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueRouter from 'vue-router';
import Sidebar from '@/UIKit/Sidebar/Sidebar.component.vue';
import {
  SIDEBAR_CLASS_NAME,
  SIDEBAR_COLLAPSED_CLASS_NAME,
  SIDEBAR_MENU_CLASS_NAME,
  SIDEBAR_PROFILE_CLASS_NAME,
  SIDEBAR_ACHIEVEMENTS_CLASS_NAME,
  SIDEBAR_LIST_CLASS_NAME,
  SIDEBAR_FOOTER_CLASS_NAME,
} from '@/UIKit/Sidebar/Sidebar.config';

import {
  MENUS,
  USER,
  PROFILE_PROGRESS,
  ACHIEVEMENTS,
  FOOTER_LINKS,
  FOOTER_LINKS_SECONDARY,
} from '@/views/pages/DemoSidebar/config';

const localVue = createLocalVue();
const router = new VueRouter();

localVue.use(VueRouter);

const sidebarOptions = {
  localVue,
  router,
  components: {
    FontAwesomeIcon,
  },
};

describe('Sidebar.component.vue', () => {
  it(`adds a .${SIDEBAR_CLASS_NAME} class on init`, () => {
    const wrapper = shallowMount(Sidebar, sidebarOptions);

    expect(wrapper.find(`.${SIDEBAR_CLASS_NAME}`).exists()).to.equal(true);
  });

  it(`adds a .${SIDEBAR_COLLAPSED_CLASS_NAME} class`, () => {
    const wrapper = shallowMount(Sidebar, {
      ...sidebarOptions,
      propsData: {
        collapsed: true,
      },
    });

    expect(wrapper.find(`.${SIDEBAR_CLASS_NAME}--collapsed`).exists()).to.equal(true);
  });

  it('renders profile component if user object is passed', () => {
    const wrapper = mount(Sidebar, {
      ...sidebarOptions,
      propsData: {
        user: { ...USER, picture: 'https://via.placeholder.com/70' },
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    });

    expect(wrapper.find(`.${SIDEBAR_PROFILE_CLASS_NAME}`).exists()).to.equal(true);
    expect(wrapper.find('.eduk-sidebar-dropdown__trigger').text()).to.equal(USER.role);
    expect(wrapper.find(`.${SIDEBAR_PROFILE_CLASS_NAME}__img`).attributes('src')).to.equal('https://via.placeholder.com/70');
    expect(wrapper.find('.eduk-sidebar-account').exists()).to.equal(true);
    expect(wrapper.find('.eduk-sidebar-account__desc .eduk-h6').text()).to.equal(USER.name);
    expect(wrapper.find('.eduk-sidebar-account__desc .eduk-p').text()).to.equal(USER.role);
  });

  it('adds profile progress', () => {
    const wrapper = mount(Sidebar, {
      ...sidebarOptions,
      propsData: {
        user: USER,
        profileProgress: PROFILE_PROGRESS,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    });

    expect(wrapper.find(`.${SIDEBAR_PROFILE_CLASS_NAME}__level`).exists()).to.equal(true);
    expect(wrapper.find(`.${SIDEBAR_PROFILE_CLASS_NAME}__level`).text()).to.equal('26');
  });

  it('adds sidebar achievements', () => {
    const wrapper = mount(Sidebar, {
      ...sidebarOptions,
      propsData: {
        achievements: ACHIEVEMENTS,
      },
    });

    expect(wrapper.find(`.${SIDEBAR_ACHIEVEMENTS_CLASS_NAME}`).exists()).to.equal(true);
    expect(wrapper.findAll(`.${SIDEBAR_ACHIEVEMENTS_CLASS_NAME}__item`).length).to.equal(ACHIEVEMENTS.length);
  });

  it('adds sidebar menus', () => {
    const wrapper = mount(Sidebar, {
      ...sidebarOptions,
      propsData: {
        menus: MENUS,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    });

    expect(wrapper.find(`.${SIDEBAR_MENU_CLASS_NAME}`).exists()).to.equal(true);
    expect(wrapper.findAll(`.${SIDEBAR_MENU_CLASS_NAME} > div`).length).to.equal(MENUS.length);
    expect(wrapper.findAll(`.${SIDEBAR_MENU_CLASS_NAME} .${SIDEBAR_LIST_CLASS_NAME}__sub-item`).length).to.equal(MENUS[3].items.length);
  });

  it('adds sidebar footer', () => {
    const wrapper = mount(Sidebar, {
      ...sidebarOptions,
      propsData: {
        footerLinks: FOOTER_LINKS,
        footerLinksSecondary: FOOTER_LINKS_SECONDARY,
      },
    });

    expect(wrapper.find(`.${SIDEBAR_FOOTER_CLASS_NAME}`).exists()).to.equal(true);
    expect(wrapper.findAll(`.${SIDEBAR_FOOTER_CLASS_NAME}__links > .${SIDEBAR_FOOTER_CLASS_NAME}__link`).length)
      .to.equal(FOOTER_LINKS.length + FOOTER_LINKS_SECONDARY.length);
  });
});
