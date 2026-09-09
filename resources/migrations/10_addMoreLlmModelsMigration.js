/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.bulkInsert(
      'llm_models',
      [
        // OpenAI Models
        {
          id: 'gpt-4-turbo',
          name: 'GPT-4 Turbo',
          provider: 'OpenAI',
          is_selected: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'gpt-4o-mini',
          name: 'GPT-4o Mini',
          provider: 'OpenAI',
          is_selected: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'o1',
          name: 'O1 (Reasoning)',
          provider: 'OpenAI',
          is_selected: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'o1-mini',
          name: 'O1 Mini',
          provider: 'OpenAI',
          is_selected: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        // Anthropic Models
        {
          id: 'claude-opus-5',
          name: 'Claude Opus 5',
          provider: 'Anthropic',
          is_selected: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'claude-opus-4',
          name: 'Claude Opus 4',
          provider: 'Anthropic',
          is_selected: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'claude-haiku-4',
          name: 'Claude Haiku 4',
          provider: 'Anthropic',
          is_selected: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'claude-3-5-sonnet',
          name: 'Claude 3.5 Sonnet',
          provider: 'Anthropic',
          is_selected: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        // DeepSeek Models
        {
          id: 'deepseek-chat',
          name: 'DeepSeek Chat',
          provider: 'DeepSeek',
          is_selected: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'deepseek-reasoner',
          name: 'DeepSeek Reasoner',
          provider: 'DeepSeek',
          is_selected: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'deepseek-coder',
          name: 'DeepSeek Coder',
          provider: 'DeepSeek',
          is_selected: false,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(
      'llm_models',
      {
        id: [
          'gpt-4-turbo',
          'gpt-4o-mini',
          'o1',
          'o1-mini',
          'claude-opus-5',
          'claude-opus-4',
          'claude-haiku-4',
          'claude-3-5-sonnet',
          'deepseek-chat',
          'deepseek-reasoner',
          'deepseek-coder'
        ]
      },
      {}
    )
  }
}
