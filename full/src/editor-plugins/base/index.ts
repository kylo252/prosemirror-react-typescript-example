import { Plugin } from 'prosemirror-state'

import { history } from 'prosemirror-history'
import { keymap } from 'prosemirror-keymap'
import { baseKeymap } from 'prosemirror-commands'

import { doc, pmBlockquote, paragraph, text } from '../../schema/nodes'
import { em, strong } from '../../schema/marks'

import {
  createNewPmBlockQuote, splitBlock
} from './commands/general'

import { EditorPlugin, PMPluginFactory } from '../../core/types';
// import { keymap } from '../../utils/keymap';

export interface BasePluginOptions {
}

export const basePlugin = (options?: BasePluginOptions): EditorPlugin => ({
  name: 'base',

  pmPlugins() {
    const plugins: { name: string; plugin: PMPluginFactory }[] = [
      { name: 'history', plugin: () => history() },
      { name: 'baseKeyMap', plugin: () => keymap(baseKeymap) },
      {
        name: 'otherKeyMap',
        plugin: () => keymap({
          'Ctrl-p': createNewPmBlockQuote,
          'Ctrl-s': splitBlock,
        })
      },
    ]

    return plugins
  },
  nodes() {
    return [
      { name: 'doc', node: doc },
      { name: 'paragraph', node: paragraph },
      { name: 'pmBlockquote', node: pmBlockquote },
      { name: 'text', node: text },
    ];
  },
  marks() {
    return [
      { name: 'em', mark: em },
      { name: 'strong', mark: strong },
    ]
  }
});
