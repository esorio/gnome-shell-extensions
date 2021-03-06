/* © Julien Pecqueur <jpec@julienpecqueur.net> */

const Main = imports.ui.main;

function init() {
}

function enable() {
    // Add transparency
    if (Main.mmPanel) {
        for (var i = 0, len = Main.mmPanel.length; i < len; i++) {
            Main.mmPanel[i].actor.add_style_class_name('panel-transparency');
        }
    }
    Main.panel.actor.add_style_class_name('panel-transparency');
    Main.panel._leftCorner.actor.add_style_class_name('corner-transparency');
    Main.panel._rightCorner.actor.add_style_class_name('corner-transparency');
}

function disable() {
    // Restore opacity
    if (Main.mmPanel) {
        for (var i = 0, len = Main.mmPanel.length; i < len; i++) {
            Main.mmPanel[i].actor.remove_style_class_name('panel-transparency');
        }
    }
    Main.panel.actor.remove_style_class_name('panel-transparency');
    Main.panel._leftCorner.actor.remove_style_class_name('corner-transparency');
    Main.panel._rightCorner.actor.remove_style_class_name('corner-transparency');
}
