/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.bulkInsert(
      'llm_models',
      [
        {
          id: 'gpt-5.6-luna',
          name: 'GPT-5.6 Luna',
          provider: 'OpenAI',
          is_selected: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'claude-sonnet-5',
          name: 'Claude Sonnet 5',
          provider: 'Anthropic',
          is_selected: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'deepseek-v4-flash',
          name: 'DeepSeek V4 Flash',
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
        id: ['gpt-5.6-luna', 'claude-sonnet-5', 'deepseek-v4-flash']
      },
      {}
    )
  }
}
